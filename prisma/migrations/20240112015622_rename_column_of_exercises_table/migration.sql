/*
  Warnings:

  - You are about to drop the column `git_url` on the `exercises` table. All the data in the column will be lost.
  - Added the required column `gif_url` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "git_url",
ADD COLUMN     "gif_url" TEXT NOT NULL;
