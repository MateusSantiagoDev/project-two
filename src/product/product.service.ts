import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProductDto } from './dto/create-product.dto';
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

  create(dto: CreateProductDto): Promise<ProductEntity> {
    const data: ProductEntity = { ...dto, id: randomUUID() }
    const valide = this.repository.create(data)
    if(!valide) {
      this.validation.handleError
    }
    return valide;
  }
}
