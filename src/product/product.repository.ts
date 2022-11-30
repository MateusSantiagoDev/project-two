import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<ProductEntity[]> {
    return this.prisma.product.findMany()
  }

  findOne(id: string): Promise<ProductEntity> {
    return this.prisma.product.findUnique({ where: { id } })
  }
}
