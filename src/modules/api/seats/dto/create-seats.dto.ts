import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSeatsDto {
  @IsString()
  @IsNotEmpty()
  seatId: string;
}
