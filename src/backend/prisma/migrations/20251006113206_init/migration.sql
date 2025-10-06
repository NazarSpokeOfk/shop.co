-- CreateTable
CREATE TABLE "Users" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Website_reviews" (
    "review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "reviewer_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Website_reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "Goods" (
    "good_id" SERIAL NOT NULL,
    "good_name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "dress_style" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "arrival_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Goods_pkey" PRIMARY KEY ("good_id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "position_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "good_id" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("position_id")
);

-- CreateTable
CREATE TABLE "Description" (
    "good_id" INTEGER NOT NULL,
    "good_desc" TEXT NOT NULL,

    CONSTRAINT "Description_pkey" PRIMARY KEY ("good_id")
);

-- CreateTable
CREATE TABLE "Details" (
    "good_id" INTEGER NOT NULL,
    "materials" TEXT NOT NULL,
    "seasons" TEXT NOT NULL,

    CONSTRAINT "Details_pkey" PRIMARY KEY ("good_id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "photo_id" SERIAL NOT NULL,
    "good_id" INTEGER NOT NULL,
    "photo" BYTEA NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("photo_id")
);

-- CreateTable
CREATE TABLE "Goods_reviews" (
    "review_id" SERIAL NOT NULL,
    "good_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "review" TEXT NOT NULL,
    "posted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Goods_reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Website_reviews_user_id_key" ON "Website_reviews"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Goods_good_name_key" ON "Goods"("good_name");

-- CreateIndex
CREATE UNIQUE INDEX "Goods_reviews_good_id_user_id_key" ON "Goods_reviews"("good_id", "user_id");

-- AddForeignKey
ALTER TABLE "Website_reviews" ADD CONSTRAINT "Website_reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_good_id_fkey" FOREIGN KEY ("good_id") REFERENCES "Goods"("good_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_good_id_fkey" FOREIGN KEY ("good_id") REFERENCES "Goods"("good_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Details" ADD CONSTRAINT "Details_good_id_fkey" FOREIGN KEY ("good_id") REFERENCES "Goods"("good_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_good_id_fkey" FOREIGN KEY ("good_id") REFERENCES "Goods"("good_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goods_reviews" ADD CONSTRAINT "Goods_reviews_good_id_fkey" FOREIGN KEY ("good_id") REFERENCES "Goods"("good_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goods_reviews" ADD CONSTRAINT "Goods_reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
