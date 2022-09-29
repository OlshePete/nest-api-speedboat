import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    order_date: string;

    @Column()
    order_event_date: number;

    @Column()
    route_id: number;

    @Column()
    user_id: number;

    @Column()
    agent_id: number;
}