-- CreateTable
CREATE TABLE "Trait" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "UserTrait" ADD CONSTRAINT "UserTrait_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTrait" ADD CONSTRAINT "UserTrait_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalTrait" ADD CONSTRAINT "AnimalTrait_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalTrait" ADD CONSTRAINT "AnimalTrait_traitId_fkey" FOREIGN KEY ("traitId") REFERENCES "Trait"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
