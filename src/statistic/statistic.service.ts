/*
https://docs.nestjs.com/providers#services
*/

import { Dependencies, Injectable } from "@nestjs/common";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "../models/user.entity";

@Injectable()
@Dependencies(getRepositoryToken(User, "connection1"))
export class StatisticService {
    database: any;
    constructor(database: any) {
        console.log("####");
        this.database = database;
        // this.mortalityRepository = mortalityRepository;
    }
    getUsers() {
        return { text: String(Object.keys(this.database)) };
    }
    async getAllUsers() {
        const res = await this.database.query(`
            SELECT * FROM user
        `);
        return res;
    }
    async findOneUser(phone: string) {
        const res = await this.database.query(`
            SELECT * FROM user WHERE user.user_phone='${phone}'
        `);
        return res;
    }
    async createUser(user_name: string, user_phone: string) {
        const res = await this.database.query(`
            INSERT INTO user (user_name, user_phone) VALUES ('${user_name}','${user_phone}')
        `);
        return res;
    }
    async createOrder(
        order_date: string,
        order_event_date: string,
        route_id: number,
        user_id: number,
        total_persons: number,
        agent_id: number,
        is_paid: boolean,
        is_exec: boolean
    ) {
        const res = await this.database.query(`
        INSERT INTO orderList(order_date, order_event_date, route_id, user_id, total_persons, agent_id, is_paid, is_exec) 
        VALUES ('${order_date}','${order_event_date}',${route_id},${user_id},${total_persons},${agent_id},${is_paid},${is_exec})
        `);
        return res;
    }
    async getAllAgent() {
        const res = await this.database.query(`
        SELECT 
            agent.agent_id,
            agent.agent_name, 
            agent.agent_phone,
            count(orderList.order_id) as 'total_orders', 
            sum(orderList.total_persons) as 'total_ticket',
            max(orderList.order_date) as 'last_sale'
        FROM agent 
        LEFT JOIN orderList ON orderList.agent_id=agent.agent_id
            GROUP BY agent.agent_id
        `);
        return res;
    }
    async createAgent(
        agent_name: string,
        agent_phone: string,
        agent_ratio: number
    ) {
        const res = await this.database.query(`
          INSERT INTO agent (agent_name,agent_phone, agent_ratio) VALUES ('${agent_name}','${agent_phone}',${agent_ratio})
        `);
        return res;
    }
    async getAgentOrderListAll(agent_id: number) {
        const res = await this.database.query(`
          SELECT order_id, order_date, order_event_date,user_name,user_phone, total_persons, agent_name, route_name, is_paid, is_exec
                FROM orderList
                LEFT JOIN agent
                    ON agent.agent_id = orderList.agent_id
                LEFT JOIN route
                    ON route.route_id = orderList.route_id
                LEFT JOIN user
                    ON user.user_id = orderList.user_id
                WHERE orderList.agent_id = ${agent_id}
        `);
        return res;
    }
    async getAgentOrderListPeriod(
        agent_id: number,
        start_date: string,
        finish_date: string
    ) {
        const res = await this.database.query(`
            SELECT order_id, order_date, order_event_date,user_name,user_phone, total_persons, agent_name, route_name, is_paid, is_exec
                FROM orderList 
                LEFT JOIN agent
                    ON agent.agent_id = orderList.agent_id
                LEFT JOIN route
                    ON route.route_id = orderList.route_id
                LEFT JOIN user
                    ON user.user_id = orderList.user_id
                WHERE orderList.agent_id = ${agent_id} AND orderList.order_date BETWEEN '${start_date}' AND '${finish_date}'
          `);
        return res;
    }
    async findOrderByUserInfo(text: string) {
        const res = await this.database.query(`
        SELECT order_id, order_date, order_event_date,user_name,user_phone, total_persons, agent_name, route_name, is_paid, is_exec
	FROM orderList
	LEFT JOIN agent
		ON agent.agent_id = orderList.agent_id	
	LEFT JOIN route
		ON route.route_id = orderList.route_id	
	LEFT JOIN user
		ON user.user_id = orderList.user_id	
	WHERE (user.user_name LIKE '%${text}%') OR (user.user_phone = '${text}' )
          `);
        return res;
    }
    async getAllOrder() {
        const res = await this.database.query(`
            SELECT 
                orderList.order_id,
                orderList.order_date,
                orderList.order_event_date,
                route_name,
                user_name,
                user_phone,
                total_persons,
                agent_name,
                orderList.agent_id,
                is_paid,
                is_exec
            FROM orderList
                LEFT JOIN user
                    ON user.user_id = orderList.user_id	
                LEFT JOIN route
                    ON route.route_id = orderList.route_id	
                LEFT JOIN agent
                    ON agent.agent_id = orderList.agent_id
          `);
        return res;
    }
}
