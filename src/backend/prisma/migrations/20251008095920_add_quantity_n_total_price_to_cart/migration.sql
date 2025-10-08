-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "total_price" INTEGER;
