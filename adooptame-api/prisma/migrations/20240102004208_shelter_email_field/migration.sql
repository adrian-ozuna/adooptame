/*
  Warnings:

  - Added the required column `email` to the `Shelter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shelter" ADD COLUMN     "email" TEXT NOT NULL;
