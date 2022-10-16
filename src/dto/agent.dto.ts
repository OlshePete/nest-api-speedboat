import { ApiProperty } from "@nestjs/swagger";
// import { IsEmail, IsString, Length } from "class-validator";

export class CreateAgentDto {
    @ApiProperty({ example: 'Иванов Иван', description: 'Имя агента' })
    // @IsString({ message: 'Должно быть строкой' })
    // @IsEmail({}, { message: "Некорректное имя клиента" })
    agent_name: string;
    @ApiProperty({ example: '+79997775533', description: 'Телефон агента' })
    // @IsString({ message: 'Должно быть строкой' })
    // @IsEmail({}, { message: "Некорректное имя клиента" })
    agent_phone: string;
    @ApiProperty({ example: '10', description: 'Комиссия агента (%)' })
    // @IsString({ message: 'Должно быть строкой' })
    // @Length(10, 15, { message: 'Не меньше 10 и не больше 15' })
    agent_ratio: number;
}