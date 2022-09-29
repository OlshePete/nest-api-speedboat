import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
    @ApiProperty({ type: 'integer' })
    @PrimaryGeneratedColumn()
    user_id: number;

    @ApiProperty({ type: 'string' })
    @Column()
    user_name: string;

    @ApiProperty({ type: 'string' })
    @Column()
    user_phone: string;

    @ApiProperty({ type: 'integer' })
    @Column()
    order_id: number;
}