import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty({ example: '2022-10-15', description: 'Дата заказа (сегодня)' })
    order_date: string;
    @ApiProperty({ example: '2023-10-15 17:00:00', description: 'Дата и время поездки' })
    order_event_date: string;
    @ApiProperty({ example: '1', description: 'Идентификатор маршрута' })
    route_id: number;
    @ApiProperty({ example: '1', description: 'Идентификатор клиента' })
    user_id: number;
    @ApiProperty({ example: '1-6', description: 'Количество людей в заказе' })
    total_persons: number;
    @ApiProperty({ example: '1', description: 'Идентификатор агента' })
    agent_id: number;
    @ApiProperty({ example: 'true', description: 'Заказ оплачен?' })
    is_paid: boolean;
    @ApiProperty({ example: 'false', description: 'Статус поездки' })
    is_exec?: boolean = false;
}