import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  ui: {
    brand: { name: 'Rose Labs' },
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'titulo',
      path: 'src/content/blog/*',
      entryLayout: 'content',
      format: { contentField: 'conteudo' },
      schema: {
        titulo: fields.slug({ name: { label: 'Título do artigo' } }),
        tituloSEO: fields.text({
          label: 'Título SEO (Google)',
          description: 'Aparece nos resultados de busca. Máx. 60 caracteres. Comece com a keyword principal. Se vazio, usa o título do artigo.',
          validation: { length: { max: 60 } },
        }),
        idioma: fields.select({
          label: 'Idioma',
          options: [
            { label: '🇧🇷 Português', value: 'pt' },
            { label: '🇺🇸 English', value: 'en' },
          ],
          defaultValue: 'pt',
        }),
        categoria: fields.select({
          label: 'Categoria',
          options: [
            { label: '🌱 Crescimento Sustentável', value: 'crescimento-sustentavel' },
            { label: '🤖 Inteligência Artificial', value: 'inteligencia-artificial' },
            { label: '🧭 Liderança', value: 'lideranca' },
          ],
          defaultValue: 'crescimento-sustentavel',
        }),
        rascunho: fields.checkbox({
          label: '📝 Rascunho (não publicado)',
          description: 'Desmarque quando estiver pronto para publicar',
          defaultValue: true,
        }),
        imagemCapa: fields.image({
          label: 'Imagem de capa',
          description: 'Recomendado: 1200x630px, JPG ou PNG',
          directory: 'public/blog',
          publicPath: '/blog/',
        }),
        resumo: fields.text({
          label: 'Resumo / Meta description (SEO)',
          description: 'Aparece nos cards do blog e no Google. Máx. 160 caracteres.',
          multiline: true,
          validation: { isRequired: true, length: { max: 160 } },
        }),
        data: fields.date({
          label: 'Data de publicação',
          validation: { isRequired: true },
        }),
        destaque: fields.checkbox({
          label: '⭐ Artigo em destaque',
          defaultValue: false,
        }),
        tempoLeitura: fields.integer({
          label: 'Tempo de leitura (minutos)',
          defaultValue: 5,
        }),
        palavraChave: fields.text({
          label: 'Palavra-chave principal (SEO)',
          description: 'Ex: como implementar IA em empresas',
        }),
        conteudo: fields.markdoc({
          label: 'Conteúdo',
          description: 'Escreva o artigo aqui',
        }),
      },
    }),
  },
});
