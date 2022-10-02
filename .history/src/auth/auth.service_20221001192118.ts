import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from "src/dto";
import * as users from "./users.json";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {

  }
  signinLocal(dto: AuthDto) {
    const user = users.find((_user) => _user.login === dto.login);
    if (!user) throw new UnauthorizedException("Credentials incorrect");
    if (user.password !== dto.password)
      throw new UnauthorizedException("Credentials incorrect");
    console.log();

    return this.signUser(user.id, user.login, user.role);
  }

  signupLocal(dto: AuthDto) {
    return "creating user service developing"
  }

  signUser(userId: number, login: string, role: string) {
    return this.jwtService.sign({
      sub: userId,
      login,
      role: role
    })
  }
}
