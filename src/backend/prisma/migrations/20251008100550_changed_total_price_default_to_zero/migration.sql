/*
  Warnings:

  - Made the column `total_price` on table `Cart` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "total_price" SET NOT NULL,
ALTER COLUMN "total_price" SET DEFAULT 0;
