-- CreateTable
CREATE TABLE "ShelterStaff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "shelterId" INTEGER NOT NULL,

    CONSTRAINT "ShelterStaff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ShelterStaff_username_key" ON "ShelterStaff"("username");

-- CreateIndex
CREATE UNIQUE INDEX "ShelterStaff_email_key" ON "ShelterStaff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ShelterStaff_tel_key" ON "ShelterStaff"("tel");

-- AddForeignKey
ALTER TABLE "ShelterStaff" ADD CONSTRAINT "ShelterStaff_shelterId_fkey" FOREIGN KEY ("shelterId") REFERENCES "Shelter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
