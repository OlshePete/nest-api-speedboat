import { SpeedboatsController } from "./speedboats.controller";
import { SpeedboatsService } from "./speedboats.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Speedboat } from "../../models/speedboat.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Speedboat], 'connection1')],
    controllers: [SpeedboatsController],
    providers: [SpeedboatsService],
})
export class SpeedboatsModule { }
