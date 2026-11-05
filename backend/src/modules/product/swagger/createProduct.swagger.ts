import { ApiBodyOptions } from '@nestjs/swagger';

export const CreateProductSwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      // Campos da product
    },
    required: [
      // Campos obrigatórios
    ],
  },
};
