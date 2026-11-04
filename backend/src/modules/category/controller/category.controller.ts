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
  CreateCategorySchema,
  type CreateCategorySchemaReturnType,
  type CreateCategorySchemaType,
  type FindAllCategorySchemaReturnType,
  type FindByIdCategorySchemaReturnType,
  QueryCategorySchema,
  type QueryCategorySchemaType,
  UpdateCategorySchema,
  type UpdateCategorySchemaReturnType,
  type UpdateCategorySchemaType,
} from '@starter/shared';

import { ZodValidationPipe } from '../../../common/pipes/zod-validation.pipe';
import { CreateCategorySwagger, UpdateCategorySwagger } from '../swagger';
import {
  CreateCategoryUsecase,
  DeleteCategoryUsecase,
  FindAllCategoryUsecase,
  FindByIdCategoryUsecase,
  UpdateCategoryUsecase,
} from '../use-case';

@ApiTags('categorys')
@Controller('category')
export class CategoryController {
  constructor(
    private readonly createCategoryUsecase: CreateCategoryUsecase,
    private readonly findAllCategoryUsecase: FindAllCategoryUsecase,
    private readonly findByIdCategoryUsecase: FindByIdCategoryUsecase,
    private readonly updateCategoryUsecase: UpdateCategoryUsecase,
    private readonly deleteCategoryUsecase: DeleteCategoryUsecase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova Categoria' })
  @ApiResponse({
    status: 201,
    description: 'Categoria criada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiBody(CreateCategorySwagger)
  async create(
    @Body(new ZodValidationPipe(CreateCategorySchema))
    body: CreateCategorySchemaType,
  ): Promise<CreateCategorySchemaReturnType> {
    return this.createCategoryUsecase.execute(body);
  }

  @Get()
  @ApiOperation({ summary: 'Busca todas as Categorias' })
  @ApiResponse({
    status: 200,
    description: 'Categorias encontradas com sucesso',
  })
  async findAll(
    @Query(new ZodValidationPipe(QueryCategorySchema))
    query: QueryCategorySchemaType,
  ): Promise<FindAllCategorySchemaReturnType> {
    return this.findAllCategoryUsecase.execute(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma Categoria pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Categoria encontrada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoria não encontrada',
  })
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<FindByIdCategorySchemaReturnType> {
    return this.findByIdCategoryUsecase.execute(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza uma Categoria pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoria atualizada com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoria não encontrada',
  })
  @ApiBody(UpdateCategorySwagger)
  async update(
    @Body(new ZodValidationPipe(UpdateCategorySchema))
    body: UpdateCategorySchemaType,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UpdateCategorySchemaReturnType> {
    return this.updateCategoryUsecase.execute(body, id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta uma Categoria pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Categoria deletada com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Categoria não encontrada',
  })
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<{ message: string }> {
    await this.deleteCategoryUsecase.execute(id);

    return {
      message: 'Categoria deletada com sucesso',
    };
  }
}
