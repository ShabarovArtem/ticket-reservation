import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seat } from './entities/seats.entity';
import { SEAT_STATUS } from './enums/seat-status.enum';
import { CreateSeatsDto } from './dto/create-seats.dto';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
  ) {}

  async createSeat(dto: CreateSeatsDto): Promise<Seat> {
    try {
      const seat = this.seatRepository.create({
        seatId: dto.seatId,
        status: SEAT_STATUS.AVAILABLE,
      });
      const savedSeat = await this.seatRepository.save(seat);
      return savedSeat;
    } catch {
      throw new ConflictException('Seat already exists');
    }
  }
}
