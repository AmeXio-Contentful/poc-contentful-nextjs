import type { CodegenConfig } from '@graphql-codegen/cli';

const fetchConfig = {
  endpoint: `https://graphql.contentful.com/content/v1/spaces/${String(
    process.env.CONTENTFUL_SPACE_ID,
  )}`,
  params: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  },
  previewParams: {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  },
};

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/lib/__generated/schema.graphql',
  generates: {
    'src/lib/types.ts': { plugins: ['typescript'] },
  },
};

export default config;
