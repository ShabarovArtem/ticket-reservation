export const SEAT_STATUS = {
  AVAILABLE: 'available' as const,
  RESERVED: 'reserved' as const,
} as const;

export type SeatStatus = 'available' | 'reserved';
