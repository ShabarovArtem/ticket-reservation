import { IsString, IsEnum } from 'class-validator';
import { SEAT_STATUS } from '../../seats/enums/seat-status.enum';
import type { SeatStatus } from '../../seats/enums/seat-status.enum';

export class ReserveSeatResponseDto {
  @IsString()
  seatId: string;

  @IsEnum(SEAT_STATUS)
  status: SeatStatus;

  @IsString()
  userId: string;
}
