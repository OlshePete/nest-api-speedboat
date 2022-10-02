/*
https://docs.nestjs.com/providers#services
*/

import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../models/user.entity';

@Injectable()
@Dependencies(
    getRepositoryToken(User, 'connection1'))
export class StatisticService {
    database: any;
    constructor(database: any) {
        console.log('####');
        this.database = database
        // this.mortalityRepository = mortalityRepository;
    }
    getUsers() {
        return { text: String(Object.keys(this.database)) }
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
    async createUser(user_name: string, user_phone: string, order_id: number) {
        const res = await this.database.query(`
            INSERT INTO user (user_name, user_phone, order_id) VALUES ('${user_name}','${user_phone}',${order_id})
        `);
        return res;
    }
    async createOrder(order_date: string, order_event_date: string, route_id: number, user_id: number, agent_id: number) {
        const res = await this.database.query(`
            INSERT INTO order (order_date, order_event_date, route_id, user_id, agent_id) VALUES ('${order_date}','${order_event_date}',${route_id},${user_id},${agent_id})
        `);
        return res;
    }
}
