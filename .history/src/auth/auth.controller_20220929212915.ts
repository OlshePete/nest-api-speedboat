import { Controller, Post, Body } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { AuthDto } from "src/dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('local/signin')
    signinLocal(@Body() dto: AuthDto) {
        return this.authService.signinLocal(dto)
    }

    @Post('local/signup')
    signupLocal(@Body() dto: AuthDto) {
        return this.authService.signupLocal(dto)
    }
}
