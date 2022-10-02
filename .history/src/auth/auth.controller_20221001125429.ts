import { Controller, Post, Body } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthDto } from "../dto/index";
import { AuthService } from "./auth.service";

@ApiTags('Authorization')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('local/signin')
    @ApiOperation({ summary: 'Авторизация-in' })
    @ApiResponse({ status: 200, type: AuthDto })
    @ApiProperty({ description: "User identifier", nullable: true })
    signinLocal(@Body() dto: AuthDto) {
        return this.authService.signinLocal(dto)
    }

    @Post('local/signup')
    @ApiOperation({ summary: 'Авторизация-up' })
    @ApiProperty({ description: "User identifier", nullable: true })
    // @ApiResponse({ type?: string, isArray?: boolean, example?: string })
    @ApiResponse({ status: 200, type: AuthDto })
    signupLocal(@Body() dto: AuthDto) {
        return this.authService.signupLocal(dto)
    }
}
