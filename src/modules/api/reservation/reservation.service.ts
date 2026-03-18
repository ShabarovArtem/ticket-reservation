import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SEAT_STATUS } from '../seats/enums/seat-status.enum';
import { ReserveSeatDto } from './dto/reserve-seat.dto';
import { Seat } from '../seats/entities/seats.entity';
import { ReserveSeatResponseDto } from './dto/reserve-seat-response.dto';
import { PgUpdateResult } from '../../database/interfaces/typeorm-results.interface';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
  ) {}

  async reserveSeat(dto: ReserveSeatDto): Promise<ReserveSeatResponseDto> {
    const result = (await this.seatRepository
      .createQueryBuilder()
      .update(Seat)
      .set({
        status: SEAT_STATUS.RESERVED,
        userId: dto.userId,
        reservedAt: new Date(),
      })
      .where('seatId = :seatId AND status = :status', {
        seatId: dto.seatId,
        status: SEAT_STATUS.AVAILABLE,
      })
      .returning(['seatId', 'status', 'userId'])
      .execute()) as PgUpdateResult<ReserveSeatResponseDto>;

    if (result.affected === 0) {
      throw new ConflictException('Seat unavailable');
    }

    return result.raw[0];
  }
}
