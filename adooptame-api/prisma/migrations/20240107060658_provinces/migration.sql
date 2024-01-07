/*
  Warnings:

  - You are about to drop the column `city` on the `Shelter` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Provincias" AS ENUM ('Azua', 'Baoruco', 'Barahona', 'Dajabón', 'Distrito Nacional', 'Duarte', 'Elías Piña', 'El Seibo', 'Espaillat', 'Independencia', 'La Altagracia', 'La Romana', 'La Vega', 'María Trinidad Sánchez', 'Monseñor Nouel', 'Monte Cristi', 'Monte Plata', 'Pedernales', 'Peravia', 'Puerto Plata', 'Hermanas Mirabal', 'Samana', 'Sánchez Ramírez', 'San Cristóbal', 'San José de Ocoa', 'San Juan', 'San Pedro de Macorís', 'Santiago', 'Santiago Rodríguez', 'Santo Domingo', 'Valverde');

-- AlterTable
ALTER TABLE "Shelter" DROP COLUMN "city",
ADD COLUMN     "province" "Provincias" NOT NULL DEFAULT 'Santo Domingo';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "province" "Provincias" NOT NULL DEFAULT 'Santo Domingo';
