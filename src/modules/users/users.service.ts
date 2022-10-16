/*
https://docs.nestjs.com/providers#services
*/

import { Dependencies, Injectable } from '@nestjs/common';
import { getRepositoryToken, InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/user.entity';

@Injectable()
@Dependencies(
    getRepositoryToken(User, 'connection1'))
export class UsersService {
    database: any
    constructor(database) {
        this.database = database;
    }
    getAllUsers() {
        return [{ id: 1, name: "Peter Olshevskii" }]
    }
    async createUser(user_name: string, user_phone: string) {
        const res = await this.database.query(`
            INSERT INTO user(user_name, user_phone) 
            VALUES('${user_name}', '${user_phone}')
        `);
        return res;
    }
}
