import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateProductDto {

  @IsString()
  @ApiProperty({
    description: "Nome do produto",
    example: "Memória RAM Fire Dragon color preto 8GB 1 RZX-D3D10M1600B/8G"
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: "Descrição do produto",
    example: "Aumentará sua produtividade e trabalhará de forma rápida e simultânea com vários aplicativos"
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: "Preço do produto",
    example: 189.95,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: "Imagem do produto",
    example: "https://http2.mlstatic.com/D_NQ_NP_708486-MLA48985615780_012022-O.webp",
  })
  image: string;
}
