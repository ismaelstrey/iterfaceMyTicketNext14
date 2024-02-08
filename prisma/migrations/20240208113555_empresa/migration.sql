/*
  Warnings:

  - You are about to drop the column `clientes` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `ie` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `nome_fantasia` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `razao_social` on the `empresas` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `empresas` table. All the data in the column will be lost.
  - Added the required column `cep` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cnpj` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "empresas" DROP COLUMN "clientes",
DROP COLUMN "ie",
DROP COLUMN "name",
DROP COLUMN "nome_fantasia",
DROP COLUMN "razao_social",
DROP COLUMN "tipo",
ADD COLUMN     "capitalSocial" DOUBLE PRECISION,
ADD COLUMN     "cep" TEXT NOT NULL,
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "cnpj" TEXT NOT NULL,
ADD COLUMN     "dataFundacao" TIMESTAMP(3),
ADD COLUMN     "email" TEXT,
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "informacoesAdicionais" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "ramoAtividade" TEXT,
ADD COLUMN     "responsavelLegal" TEXT,
ADD COLUMN     "situacaoTributaria" TEXT,
ADD COLUMN     "telefone" TEXT,
ADD COLUMN     "tipoEmpresa" TEXT;
