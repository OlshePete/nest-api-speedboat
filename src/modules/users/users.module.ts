import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../models/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User], 'connection1')],
    controllers: [
        UsersController,],
    providers: [
        UsersService,],
})
export class UsersModule { }
