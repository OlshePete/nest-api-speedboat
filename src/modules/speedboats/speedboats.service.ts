import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Speedboat } from '../../models/speedboat.entity';

@Injectable()

export class SpeedboatsService {
    constructor(
        @InjectRepository(Speedboat)
        private usersRepository: Repository<Speedboat>,
    ) { }

    // findAll(): Promise<Speedboat[]> {
    //     return this.usersRepository.find();
    // }

    // findOne(id: string): Promise<Speedboat> {
    //     // return this.usersRepository.findOneBy({ id });
    // }

    // async remove(id: string): Promise<void> {
    //     await this.usersRepository.delete(id);
    // }

}
