import { Controller, Post, Body } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthDto } from "src/dto";
import { AuthService } from "./auth.service";

@ApiTags('Authorization')
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
