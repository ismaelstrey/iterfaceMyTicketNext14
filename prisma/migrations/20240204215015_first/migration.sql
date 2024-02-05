/*
  Warnings:

  - You are about to drop the column `tiketStatusId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the `tiket_status` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ABERTO', 'INICIADO', 'PAUSADO', 'CONCLUIDO', 'CANCELADO');

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_tiketStatusId_fkey";

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "tiketStatusId",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ABERTO';

-- DropTable
DROP TABLE "tiket_status";
