import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateProductSchema,
  type CreateProductSchemaReturnType,
  type CreateProductSchemaType,
  type FindAllProductSchemaReturnType,
  type FindByIdProductSchemaReturnType,
  QueryProductSchema,
  type QueryProductSchemaType,
  UpdateProductSchema,
  type UpdateProductSchemaReturnType,
  type UpdateProductSchemaType,
} from '@starter/shared';

import { ZodValidationPipe } from '../../../common/pipes/zod-validation.pipe';
import { CreateProductSwagger, UpdateProductSwagger } from '../swagger';
import {
  CreateProductUsecase,
  DeleteProductUsecase,
  FindAllProductUsecase,
  FindByIdProductUsecase,
  UpdateProductUsecase,
} from '../use-case';

@ApiTags('products')
@Controller('product')
export class ProductController {
  constructor(
    private readonly createProductUsecase: CreateProductUsecase,
    private readonly findAllProductUsecase: FindAllProductUsecase,
    private readonly findByIdProductUsecase: FindByIdProductUsecase,
    private readonly updateProductUsecase: UpdateProductUsecase,
    private readonly deleteProductUsecase: DeleteProductUsecase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo produto' })
  @ApiResponse({
    status: 201,
    description: 'Produto criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiBody(CreateProductSwagger)
  async create(
    @Body(new ZodValidationPipe(CreateProductSchema))
    body: CreateProductSchemaType,
  ): Promise<CreateProductSchemaReturnType> {
    return this.createProductUsecase.execute(body);
  }

  @Get()
  @ApiOperation({ summary: 'Busca todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Produtos encontrados com sucesso',
  })
  async findAll(
    @Query(new ZodValidationPipe(QueryProductSchema))
    query: QueryProductSchemaType,
  ): Promise<FindAllProductSchemaReturnType> {
    return this.findAllProductUsecase.execute(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca um produto pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Produto encontrado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado',
  })
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<FindByIdProductSchemaReturnType> {
    return this.findByIdProductUsecase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um produto pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Produto atualizado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado',
  })
  @ApiBody(UpdateProductSwagger)
  async update(
    @Body(new ZodValidationPipe(UpdateProductSchema))
    body: UpdateProductSchemaType,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UpdateProductSchemaReturnType> {
    return this.updateProductUsecase.execute(body, id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta um produto pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Produto deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Produto não encontrado',
  })
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<{ message: string }> {
    await this.deleteProductUsecase.execute(id);

    return {
      message: 'Produto deletado com sucesso',
    };
  }
}
