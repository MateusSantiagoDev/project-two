import { Controller, Get, Param } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { ProductService } from './product.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags("Product")
@Controller("product")
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  @ApiOperation({
    summary: 'Visualizar todos os produtos',
  })
  findAll(): Promise<ProductEntity[]> {
    return this.service.findAll();
  }

  @Get(":id")
  @ApiOperation({
    summary: "Buscar um produto pelo ID",
  })
  findOne(@Param("id") id: string): Promise<ProductEntity> {
    return this.service.findOne(id)
  }
}
