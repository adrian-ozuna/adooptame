/*
  Warnings:

  - You are about to drop the `AnimalTrait` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trait` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTrait` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnimalTrait" DROP CONSTRAINT "AnimalTrait_animalId_fkey";

-- DropForeignKey
ALTER TABLE "AnimalTrait" DROP CONSTRAINT "AnimalTrait_traitId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrait" DROP CONSTRAINT "UserTrait_traitId_fkey";

-- DropForeignKey
ALTER TABLE "UserTrait" DROP CONSTRAINT "UserTrait_userId_fkey";

-- DropTable
DROP TABLE "AnimalTrait";

-- DropTable
DROP TABLE "Trait";

-- DropTable
DROP TABLE "UserTrait";
