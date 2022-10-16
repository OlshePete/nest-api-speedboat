/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "../../models/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@ApiTags('Клиенты')
@Controller('users')
export class UsersController {
    constructor(private appService: UsersService) { }
    @Get('')
    getUsers() {
        return this.appService.getAllUsers()
    }
    @ApiOperation({ summary: 'Создание нового клиента' })
    @ApiResponse({ status: 200, type: User })
    @Post('create')
    createUsers(@Body() userDto: CreateUserDto) {
        return this.appService.createUser(userDto.user_name, userDto.user_phone)
    }
}