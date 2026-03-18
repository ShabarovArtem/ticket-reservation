export interface PgUpdateResult<T = unknown> {
  affected?: number;
  raw: T[];
}
