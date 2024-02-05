/*
  Warnings:

  - You are about to drop the column `prioridadeId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the `prioridades` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Prioridade" AS ENUM ('ALTA', 'MEDIA', 'BAIXA', 'PLANEJADA', 'CRITICA');

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_prioridadeId_fkey";

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "prioridadeId",
ADD COLUMN     "prioridade" "Prioridade" NOT NULL DEFAULT 'BAIXA';

-- DropTable
DROP TABLE "prioridades";
