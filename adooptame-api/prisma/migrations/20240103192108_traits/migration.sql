-- CreateTable
CREATE TABLE "Trait" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PersonalityToTrait" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Trait_title_key" ON "Trait"("title");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonalityToTrait_AB_unique" ON "_PersonalityToTrait"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonalityToTrait_B_index" ON "_PersonalityToTrait"("B");

-- AddForeignKey
ALTER TABLE "_PersonalityToTrait" ADD CONSTRAINT "_PersonalityToTrait_A_fkey" FOREIGN KEY ("A") REFERENCES "Personality"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PersonalityToTrait" ADD CONSTRAINT "_PersonalityToTrait_B_fkey" FOREIGN KEY ("B") REFERENCES "Trait"("id") ON DELETE CASCADE ON UPDATE CASCADE;
