import { ApiProperty } from "@nestjs/swagger";
// import { IsEmail, IsString, Length } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({ example: '2022-09-27', description: 'Дата заказа' })
    // @IsString({ message: 'Должно быть строкой' })
    // @IsEmail({}, { message: "Некорректное имя клиента" })
    order_date: string;
    @ApiProperty({ example: '2022-09-27', description: 'Дата поездки' })
    // @IsString({ message: 'Должно быть строкой' })
    // @IsEmail({}, { message: "Некорректное имя клиента" })
    order_event_date: string;
    @ApiProperty({ example: '1/2/3', description: 'Идентификатор клиента' })
    // @IsString({ message: 'Должно быть строкой' })
    // @Length(10, 15, { message: 'Не меньше 10 и не больше 15' })
    route_id: string;
    @ApiProperty({ example: '12', description: 'Идентификатор клиента' })
    // @IsString({ message: 'Должно быть строкой' })
    // @Length(10, 15, { message: 'Не меньше 10 и не больше 15' })
    user_id: string;
    @ApiProperty({ example: '1', description: 'Идентификатор агента' })
    // @IsString({ message: 'Должно быть числом' })
    // @Length(10, 15, { message: 'Больше 0' })
    agent_id: number;
}