/*
  Warnings:

  - Changed the type of `status` on the `Animal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AnimalStatus" AS ENUM ('available', 'adopted', 'fostered', 'transferred', 'deceased');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('healthy', 'disabled', 'banned');

-- AlterTable
ALTER TABLE "Animal" DROP COLUMN "status",
ADD COLUMN     "status" "AnimalStatus" NOT NULL;

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "status" "UserStatus" NOT NULL,
    "gender" "Gender" NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
