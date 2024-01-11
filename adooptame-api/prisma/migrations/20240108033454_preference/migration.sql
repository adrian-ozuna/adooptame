/*
  Warnings:

  - You are about to drop the column `title` on the `Preference` table. All the data in the column will be lost.
  - You are about to drop the `_PreferenceToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Preference` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `SpeciesInterest` to the `Preference` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Preference` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SpeciesInterest" AS ENUM ('dogs', 'cats', 'all');

-- DropForeignKey
ALTER TABLE "_PreferenceToUser" DROP CONSTRAINT "_PreferenceToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PreferenceToUser" DROP CONSTRAINT "_PreferenceToUser_B_fkey";

-- AlterTable
ALTER TABLE "Preference" DROP COLUMN "title",
ADD COLUMN     "SpeciesInterest" "SpeciesInterest" NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_PreferenceToUser";

-- CreateIndex
CREATE UNIQUE INDEX "Preference_userId_key" ON "Preference"("userId");

-- AddForeignKey
ALTER TABLE "Preference" ADD CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
