import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Agent {
    @PrimaryGeneratedColumn()
    agent_id: number;

    @Column()
    agent_name: string;

    @Column()
    agent_phone: string;

    @Column()
    agent_ratio: number;
}