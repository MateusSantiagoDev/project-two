import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
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

  handleError(err: Error): undefined {
    const errorLines = err.message?.split("\n");
    const lastErrorLine = errorLines[errorLines.length -1]?.trim();
    throw new UnprocessableEntityException(lastErrorLine || "An error occurred while performing the operation")
  }
}
