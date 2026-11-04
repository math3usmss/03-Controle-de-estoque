import { ApiBodyOptions } from '@nestjs/swagger';

export const CreateCategorySwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      // Campos da category
    },
    required: [
      // Campos obrigatórios
    ],
  },
};
