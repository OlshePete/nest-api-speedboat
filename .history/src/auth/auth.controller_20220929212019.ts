import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('local/signin')
    signinLocal() {
        return this.authService.signinLocal()
    }

    @Post()
    signupLocal('local/signup') {
        return this.authService.signupLocal()
    }
}
