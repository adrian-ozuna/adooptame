/*
  Warnings:

  - You are about to drop the column `traitId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AnimalTrait` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTrait` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnimalTrait" DROP CONSTRAINT "AnimalTrait_animalId_fkey";

-- DropForeignKey
ALTER TABLE "AnimalTrait" DROP CONSTRAINT "AnimalTrait_traitId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_traitId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrait" DROP CONSTRAINT "UserTrait_traitId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrait" DROP CONSTRAINT "UserTrait_userId_fkey";

-- DropIndex
DROP INDEX "Trait_title_key";

-- AlterTable
ALTER TABLE "Trait" ADD COLUMN     "animalId" INTEGER,
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "traitId";

-- DropTable
DROP TABLE "AnimalTrait";

-- DropTable
DROP TABLE "UserTrait";

-- AddForeignKey
ALTER TABLE "Trait" ADD CONSTRAINT "Trait_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trait" ADD CONSTRAINT "Trait_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
