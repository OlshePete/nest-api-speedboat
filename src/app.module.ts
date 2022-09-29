import { UsersModule } from './modules/users/users.module';
import { StatisticModule } from './statistic/statistic.module';
import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Speedboat } from './models/speedboat.entity';
import { Agent } from './models/agent.entity';
import { User } from './models/user.entity';
import { Route } from './models/route.entity';
import { Order } from './models/order.entity';
@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        UsersModule,
        StatisticModule,
        TypeOrmModule.forRoot({
            name: 'connection1',
            type: 'better-sqlite3',
            // IN-MEMORY DATABASE
            database: 'speedboat_db',
            // database: 'speedboatDB',
            entities: [Speedboat, Agent, User, Route, Order],
            autoLoadEntities: true,
            logging: false,
            // migrationTableName: 'migrations',
            migrations: [
                'src/migration/**/*.{ts, js}'
            ],
            // [true] ONLY FOR DEVELOPMENT STAGE
            synchronize: true,
        })
    ]
})
export class AppModule { }