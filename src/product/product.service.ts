import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { ProductValidation } from './helpers/product-validation';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly repository: ProductRepository,
    private readonly validation: ProductValidation,
  ) {}

  findAll(): Promise<ProductEntity[]> {
    return this.repository.findAll();
  }

  findOne(id: string): Promise<ProductEntity> {
    return this.validation.findById(id);
  }
}
