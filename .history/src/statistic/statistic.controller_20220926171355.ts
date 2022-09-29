/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../modules/users/dto/create-user.dto';
import { User } from '../models/user.entity';
import { StatisticService } from './statistic.service';

@ApiTags('Dataset')
@Controller('/data')
export class StatisticController {
    constructor(private statisticService: StatisticService) { }
    @Get('')
    @ApiOperation({ summary: 'test' })
    getUsers() {
        return this.statisticService.getUsers()
    }
    @Get('one/:phone')
    @ApiOperation({ summary: 'find one customer' })
    findOneUser(@Param() params) {
        const phone = params.phone
        return this.statisticService.findOneUser(phone)
    }
    @Get('all')
    @ApiOperation({ summary: 'whole data' })
    getAllUsers() {
        return this.statisticService.getAllUsers()
    }
    @ApiOperation({ summary: 'Создание нового клиента' })
    @ApiResponse({ status: 200, type: User })
    @Post('create')
    createUsers(@Body() userDto: CreateUserDto) {
        return this.statisticService.createUser(userDto.user_name, userDto.user_phone, userDto.order_id)
    }

}
