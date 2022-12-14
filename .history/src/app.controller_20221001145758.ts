import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";
@Controller('/api')
export class AppController {
    constructor(private appService: AppService) { }
    @UseGuards(AuthGuard('jwt'))
    @Get('/')
    getUsers() {
        return this.appService.getUsers()
    }
}