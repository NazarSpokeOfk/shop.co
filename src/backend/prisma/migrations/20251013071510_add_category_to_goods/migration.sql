/*
  Warnings:

  - Added the required column `category` to the `Goods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goods" ADD COLUMN     "category" TEXT NOT NULL;
