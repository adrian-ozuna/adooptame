-- CreateTable
CREATE TABLE "Preference" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PreferenceToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PreferenceToUser_AB_unique" ON "_PreferenceToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PreferenceToUser_B_index" ON "_PreferenceToUser"("B");

-- AddForeignKey
ALTER TABLE "_PreferenceToUser" ADD CONSTRAINT "_PreferenceToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Preference"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PreferenceToUser" ADD CONSTRAINT "_PreferenceToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
