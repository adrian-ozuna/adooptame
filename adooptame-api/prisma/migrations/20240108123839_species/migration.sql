/*
  Warnings:

  - Changed the type of `species` on the `Animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Species" AS ENUM ('cat', 'dog');

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "species",
ADD COLUMN     "species" "Species" NOT NULL;
