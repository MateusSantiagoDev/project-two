import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductEntity } from '../entities/product.entity';
import { ProductRepository } from '../product.repository';

@Injectable()
export class ProductValidation {
  constructor(private readonly repository: ProductRepository) {}

  async findById(id: string): Promise<ProductEntity> {
    const unique = await this.repository.findOne(id)
    if (!unique) {
      throw new NotFoundException(`No record was found with ID: ${id}`);
    }
    return unique;
  }
}
