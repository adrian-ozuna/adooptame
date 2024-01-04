/*
  Warnings:

  - You are about to drop the `AnimalPersonality` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Personality` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPersonality` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PersonalityToTrait` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnimalPersonality" DROP CONSTRAINT "AnimalPersonality_animalId_fkey";

-- DropForeignKey
ALTER TABLE "AnimalPersonality" DROP CONSTRAINT "AnimalPersonality_personalityId_fkey";

-- DropForeignKey
ALTER TABLE "UserPersonality" DROP CONSTRAINT "UserPersonality_personalityId_fkey";

-- DropForeignKey
ALTER TABLE "UserPersonality" DROP CONSTRAINT "UserPersonality_userId_fkey";

-- DropForeignKey
ALTER TABLE "_PersonalityToTrait" DROP CONSTRAINT "_PersonalityToTrait_A_fkey";

-- DropForeignKey
ALTER TABLE "_PersonalityToTrait" DROP CONSTRAINT "_PersonalityToTrait_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "traitId" INTEGER;

-- DropTable
DROP TABLE "AnimalPersonality";

-- DropTable
DROP TABLE "Personality";

-- DropTable
DROP TABLE "UserPersonality";

-- DropTable
DROP TABLE "_PersonalityToTrait";

-- CreateTable
CREATE TABLE "UserTrait" (
    "userId" INTEGER NOT NULL,
    "traitId" INTEGER NOT NULL,

    CONSTRAINT "UserTrait_pkey" PRIMARY KEY ("userId","traitId")
);

-- CreateTable
CREATE TABLE "AnimalTrait" (
    "animalId" INTEGER NOT NULL,
    "traitId" INTEGER NOT NULL,

    CONSTRAINT "AnimalTrait_pkey" PRIMARY KEY ("animalId","traitId")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrait" ADD CONSTRAINT "UserTrait_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrait" ADD CONSTRAINT "UserTrait_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalTrait" ADD CONSTRAINT "AnimalTrait_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalTrait" ADD CONSTRAINT "AnimalTrait_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
