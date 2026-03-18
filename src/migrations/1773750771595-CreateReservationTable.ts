import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateReservationTable1773750771595 implements MigrationInterface {
  name = 'CreateReservationTable1773750771595';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."seats_status_enum" AS ENUM('available', 'reserved')`,
    );
    await queryRunner.query(
      `CREATE TABLE "seats"
       (
           "id"         uuid                         NOT NULL DEFAULT uuid_generate_v4(),
           "seatId"     character varying            NOT NULL,
           "status"     "public"."seats_status_enum" NOT NULL DEFAULT 'available',
           "userId"     character varying,
           "reservedAt" TIMESTAMP,
           "createdAt"  TIMESTAMP                    NOT NULL DEFAULT now(),
           "updatedAt"  TIMESTAMP                    NOT NULL DEFAULT now(),
           CONSTRAINT "UQ_seats_seatId" UNIQUE ("seatId"),
           CONSTRAINT "PK_seats_id" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "seats"`);
    await queryRunner.query(`DROP TYPE "public"."seats_status_enum"`);
  }
}
