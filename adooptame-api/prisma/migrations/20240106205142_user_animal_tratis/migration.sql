/*
  Warnings:

  - You are about to drop the column `animalId` on the `Trait` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Trait` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Trait" DROP CONSTRAINT "Trait_animalId_fkey";

-- DropForeignKey
ALTER TABLE "Trait" DROP CONSTRAINT "Trait_userId_fkey";

-- AlterTable
ALTER TABLE "Trait" DROP COLUMN "animalId",
DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_AnimalToTrait" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_TraitToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AnimalToTrait_AB_unique" ON "_AnimalToTrait"("A", "B");

-- CreateIndex
CREATE INDEX "_AnimalToTrait_B_index" ON "_AnimalToTrait"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TraitToUser_AB_unique" ON "_TraitToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_TraitToUser_B_index" ON "_TraitToUser"("B");

-- AddForeignKey
ALTER TABLE "_AnimalToTrait" ADD CONSTRAINT "_AnimalToTrait_A_fkey" FOREIGN KEY ("A") REFERENCES "Animal"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AnimalToTrait" ADD CONSTRAINT "_AnimalToTrait_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TraitToUser" ADD CONSTRAINT "_TraitToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TraitToUser" ADD CONSTRAINT "_TraitToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
