import { ApiProperty } from "@nestjs/swagger";
// import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: 'Федоров Николай', description: 'Имя клиента' })
    // @IsString({ message: 'Должно быть строкой' })
    // @IsEmail({}, { message: "Некорректное имя клиента" })
    user_name: string;
    @ApiProperty({ example: '+79112223344', description: 'телефон' })
    // @IsString({ message: 'Должно быть строкой' })
    // @Length(10, 15, { message: 'Не меньше 10 и не больше 15' })
    user_phone: string;
}