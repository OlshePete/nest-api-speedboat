import { Controller, Post, Body } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthDto } from "../dto/index";
import { AuthService } from "./auth.service";

@ApiTags('Authorization')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('local/signin')
    @ApiOperation({ summary: 'Авторизация' })
    @ApiResponse({ status: 200, type: AuthDto })
    signinLocal(@Body() dto: AuthDto) {
        return this.authService.signinLocal(dto)
    }

    @Post('local/signup')
    @ApiOperation({ summary: 'Авторизация' })
    @ApiResponse({ status: 200, type: AuthDto })
    signupLocal(@Body() dto: AuthDto) {
        return this.authService.signupLocal(dto)
    }
}
