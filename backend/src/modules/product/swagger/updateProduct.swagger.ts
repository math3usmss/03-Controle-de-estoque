import { ApiBodyOptions } from '@nestjs/swagger';

export const UpdateProductSwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      // Campos atualizáveis da product
    },
  },
};
