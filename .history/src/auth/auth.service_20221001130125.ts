import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthDto } from "src/dto";
import * as users from "./users.json";

@Injectable()
export class AuthService {
  signinLocal(dto: AuthDto) {
    console.log(users)
    const user = users.find((_user) => _user.login === dto.login);
    if (!user) throw new UnauthorizedException("Credentials incorrect");
    if (user.password !== dto.password)
      throw new UnauthorizedException("Credentials incorrect");
    return user;
  }

  signupLocal(dto: AuthDto) { }
}
