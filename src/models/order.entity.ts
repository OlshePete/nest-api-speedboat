import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    order_id: number;

    @Column()
    order_date: string;

    @Column()
    order_event_date: string;

    @Column()
    route_id: number;

    @Column()
    user_id: number;

    @Column()
    total_persons: number;

    @Column()
    agent_id: number;

    @Column({ default: false })
    is_paid: boolean;

    @Column({ default: false })
    is_exec: boolean;
}