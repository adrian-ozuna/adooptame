/*
  Warnings:

  - The values [dogs,cats] on the enum `SpeciesInterest` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "SpeciesInterest_new" AS ENUM ('dog', 'cat', 'all');
ALTER TABLE "Preference" ALTER COLUMN "SpeciesInterest" TYPE "SpeciesInterest_new" USING ("SpeciesInterest"::text::"SpeciesInterest_new");
ALTER TYPE "SpeciesInterest" RENAME TO "SpeciesInterest_old";
ALTER TYPE "SpeciesInterest_new" RENAME TO "SpeciesInterest";
DROP TYPE "SpeciesInterest_old";
COMMIT;
