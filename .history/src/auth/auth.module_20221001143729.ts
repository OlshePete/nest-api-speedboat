import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [JwtModule.register({
        secret: 'super-secret-cat',
    })],
    controllers: [
        AuthController,],
    providers: [
        AuthService,],
})
export class AuthModule { }
