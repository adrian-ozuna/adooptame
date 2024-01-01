-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'unknown');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('available', 'adopted', 'fostered', 'transferred', 'deceased');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('small', 'medium', 'large');

-- CreateTable
CREATE TABLE "Shelter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "website" TEXT,
    "description" TEXT,
    "tel" TEXT NOT NULL,

    CONSTRAINT "Shelter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" DECIMAL(65,30) NOT NULL,
    "gender" "Gender" NOT NULL,
    "description" TEXT NOT NULL,
    "size" "Size" NOT NULL,
    "image_url" TEXT NOT NULL,
    "arrival_date" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "shelterId" INTEGER,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shelter_name_key" ON "Shelter"("name");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
