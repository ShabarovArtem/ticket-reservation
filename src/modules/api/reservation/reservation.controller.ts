import { Body, Controller, Post } from '@nestjs/common';
import { ReserveSeatDto } from './dto/reserve-seat.dto';
import { ReservationService } from './reservation.service';

@Controller('reserve')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async reserve(@Body() dto: ReserveSeatDto) {
    return this.reservationService.reserveSeat(dto);
  }
}
