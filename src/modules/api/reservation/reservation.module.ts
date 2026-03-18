import { Module } from '@nestjs/common';
import { SeatsModule } from '../seats/seats.module';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';

@Module({
  imports: [SeatsModule],
  providers: [ReservationService],
  controllers: [ReservationController],
})
export class ReservationModule {}
