import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    tituloSEO: z.string().optional(),
    idioma: z.enum(['pt', 'en']),
    categoria: z.enum(['crescimento-sustentavel', 'inteligencia-artificial', 'lideranca']),
    imagemCapa: z.string().optional(),
    resumo: z.string(),
    data: z.string(),
    destaque: z.boolean().default(false),
    rascunho: z.boolean().default(true),
    tempoLeitura: z.number().default(5),
    palavraChave: z.string().optional(),
  }),
});

export const collections = { blog };
