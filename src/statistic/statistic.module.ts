import { StatisticService } from "./statistic.service";
import { StatisticController } from "./statistic.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User], "connection1")],
    controllers: [StatisticController],
    providers: [StatisticService],
})
export class StatisticModule { }
