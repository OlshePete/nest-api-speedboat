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
    async createUser(user_name: string, user_phone: string, order_id: number) {
        const res = await this.database.query(`
            INSERT INTO user (user_name, user_phone, order_id) VALUES ('${user_name}','${user_phone}',${order_id})
        `);
        return res;
    }
}
