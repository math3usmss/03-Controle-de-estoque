/*
  Warnings:

  - You are about to drop the `_CategoryProducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryProducts" DROP CONSTRAINT "_CategoryProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryProducts" DROP CONSTRAINT "_CategoryProducts_B_fkey";

-- DropTable
DROP TABLE "_CategoryProducts";

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
