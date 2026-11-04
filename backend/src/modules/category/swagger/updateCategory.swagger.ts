import { ApiBodyOptions } from '@nestjs/swagger';

export const UpdateCategorySwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      // Campos atualizáveis da category
    },
  },
};
