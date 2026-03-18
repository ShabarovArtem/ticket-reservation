import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SEAT_STATUS } from '../enums/seat-status.enum';
import type { SeatStatus } from '../enums/seat-status.enum';

@Entity('seats')
export class Seat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, unique: true })
  seatId: string;

  @Column({
    type: 'enum',
    enum: Object.values(SEAT_STATUS),
    default: SEAT_STATUS.AVAILABLE,
  })
  status: SeatStatus;

  @Column({ type: 'varchar', nullable: true })
  userId: string | null;

  @Column({ type: 'timestamp', nullable: true })
  reservedAt: Date | null;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
