/*
  Warnings:

  - You are about to drop the `_ObjetiveToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `objetives` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ObjetiveToUser" DROP CONSTRAINT "_ObjetiveToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObjetiveToUser" DROP CONSTRAINT "_ObjetiveToUser_B_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "phone" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "_ObjetiveToUser";

-- DropTable
DROP TABLE "objetives";
