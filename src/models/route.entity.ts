import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Route {
    @PrimaryGeneratedColumn()
    route_id: number;

    @Column()
    route_name: string;

    @Column()
    route_time: number;
}