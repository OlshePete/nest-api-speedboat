import { ApiProperty } from "@nestjs/swagger";

export class CreatePeriodDto {
    @ApiProperty({ example: '1', description: 'Идентификатор агента' })
    agent_id: number;
    @ApiProperty({ example: '2022-10-15', description: 'Дата заказа (сегодня)' })
    start_date: string;
    @ApiProperty({ example: '2023-10-15', description: 'Дата поездки' })
    finish_date: string;
}