import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./entities/product.entity";
import { ProductRepository } from "./product.repository";

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  findAll(): Promise<ProductEntity[]> {
    return this.repository.findAll()
  }

}
