import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthDto } from "src/dto";
import users from "./users.json";

@Injectable()
export class AuthService {
  signinLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.login === dto.login);
    if (!user) throw new UnauthorizedException("Credentials incorrect");
    if (user.password !== dto.password)
      throw new UnauthorizedException("Credentials incorrect");
    return user;
  }

  signupLocal(dto: AuthDto) { }
}
