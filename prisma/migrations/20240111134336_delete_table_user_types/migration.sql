/*
  Warnings:

  - You are about to drop the column `user_type_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `user_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_type_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_type_id",
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'CLIENT';

-- DropTable
DROP TABLE "user_types";
