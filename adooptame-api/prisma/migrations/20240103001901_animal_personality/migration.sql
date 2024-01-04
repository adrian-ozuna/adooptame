-- CreateTable
CREATE TABLE "AnimalPersonality" (
    "id" SERIAL NOT NULL,
    "animalId" INTEGER NOT NULL,
    "personalityId" INTEGER NOT NULL,

    CONSTRAINT "AnimalPersonality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AnimalPersonality_animalId_key" ON "AnimalPersonality"("animalId");

-- AddForeignKey
ALTER TABLE "AnimalPersonality" ADD CONSTRAINT "AnimalPersonality_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalPersonality" ADD CONSTRAINT "AnimalPersonality_personalityId_fkey" FOREIGN KEY ("personalityId") REFERENCES "Personality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
