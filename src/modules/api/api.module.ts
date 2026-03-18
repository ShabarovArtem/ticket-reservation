import { Module } from '@nestjs/common';
import { SeatsModule } from './seats/seats.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [SeatsModule, ReservationModule],
})
export class ApiModule {}
