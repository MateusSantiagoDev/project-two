import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ProductValidation } from "./helpers/product-validation";
import { ProductController } from "./product.controller";
import { ProductRepository } from "./product.repository";
import { ProductService } from "./product.service";

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, ProductValidation],
})
export class ProductModule {}
