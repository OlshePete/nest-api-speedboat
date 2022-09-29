import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Speedboat {
    @PrimaryGeneratedColumn()
    speedboat_id: number;

    @Column()
    boat_name: string;

    @Column()
    max_person: number;

    @Column({ default: true })
    isActive: boolean;
}