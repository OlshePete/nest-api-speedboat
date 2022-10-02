import { Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import users from "./users.json";

@Injectable()
export class AuthService {
    signinLocal(dto: AuthDto) { }

    signupLocal(dto: AuthDto) { }
}
