/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "../modules/users/dto/create-user.dto";
import { User } from "../models/user.entity";
import { Agent } from "../models/agent.entity";
import { StatisticService } from "./statistic.service";
import { CreateAgentDto } from "../dto/agent.dto";
import { CreateOrderDto } from "../dto/order.dto";
import { CreatePeriodDto } from "../dto/period.dto";

@ApiTags("Dataset")
@Controller("/data")
export class StatisticController {
    constructor(private statisticService: StatisticService) { }
    @Get("")
    @ApiOperation({ summary: "test" })
    getUsers() {
        return this.statisticService.getUsers();
    }
    @Get("one/:phone")
    @ApiOperation({ summary: "Проверить клиента по номеру телефона" })
    findOneUser(@Param("phone") phone: string) {
        return this.statisticService.findOneUser(phone);
    }
    @Get("all-users")
    @ApiOperation({ summary: "Получить всех клиентов" })
    getAllUsers() {
        return this.statisticService.getAllUsers();
    }
    @Get("all-agents")
    @ApiOperation({ summary: "Получить всех агентов" })
    getAllAgent() {
        return this.statisticService.getAllAgent();
    }
    @Get("all-orders")
    @ApiOperation({ summary: "Получить все заказы" })
    getAllOrder() {
        return this.statisticService.getAllOrder();
    }
    @ApiOperation({ summary: "Добавление новых клиентов" })
    @ApiResponse({ status: 200, type: User })
    @Post("create-user")
    createUsers(@Body() userDto: CreateUserDto) {
        return this.statisticService.createUser(
            userDto.user_name,
            userDto.user_phone
        );
    }

    @ApiOperation({ summary: "Добавление новых агентов" })
    @ApiResponse({ status: 200, type: Agent })
    @Post("create-agent")
    createAgents(@Body() agentDto: CreateAgentDto) {
        return this.statisticService.createAgent(
            agentDto.agent_name,
            agentDto.agent_phone,
            agentDto.agent_ratio
        );
    }

    @Get("agent/:agent_id")
    @ApiOperation({ summary: "Показать все заказы агента по идентификатору" })
    getAgentOrderListAll(@Param("agent_id") agent_id: number) {
        return this.statisticService.getAgentOrderListAll(agent_id);
    }
    @Get("orders/:text")
    @ApiOperation({ summary: "Поиск заказов по имения клиента или телефону (соблюдение регистра в имени обязательно)" })
    findOrderByUserInfo(@Param("text") text: string) {
        return this.statisticService.findOrderByUserInfo(text);
    }

    @ApiOperation({ summary: "Показать все заказы агента за нужный период" })
    @ApiResponse({ status: 200, type: Agent })
    @Post("agent/period")
    getAgentOrderListPeriod(@Body() periodDto: CreatePeriodDto,) {
        return this.statisticService.getAgentOrderListPeriod(periodDto.agent_id, periodDto.start_date, periodDto.finish_date);
    }

    @ApiOperation({ summary: "Создание новых заказов" })
    @ApiResponse({ status: 200, type: Agent })
    @Post("create-order")
    createOrders(@Body() orderDto: CreateOrderDto) {
        return this.statisticService.createOrder(
            orderDto.order_date,
            orderDto.order_event_date,
            orderDto.route_id,
            orderDto.user_id,
            orderDto.total_persons,
            orderDto.agent_id,
            orderDto.is_paid,
            orderDto.is_exec,
        );
    }
}
