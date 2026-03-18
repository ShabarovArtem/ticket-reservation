import { Body, Controller, Post } from '@nestjs/common';
import { CreateSeatsDto } from './dto/create-seats.dto';
import { SeatsService } from './seats.service';

@Controller('seats')
export class SeatsController {
  constructor(private readonly seatService: SeatsService) {}

  @Post()
  async create(@Body() dto: CreateSeatsDto) {
    return this.seatService.createSeat(dto);
  }
}
