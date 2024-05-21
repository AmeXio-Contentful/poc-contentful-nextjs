import { CodegenConfig } from '@graphql-codegen/cli';

import { fetchConfig, fetchConfigSanity } from './src/lib/fetchConfig';

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    './src': {
      documents: ['./src/lib/shared-fragments/*.graphql'],
      preset: 'near-operation-file',
      schema: [
        {
          [fetchConfig.endpoint]: fetchConfig.params,
        },
      ],
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'lib/contentful/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: '@src/lib/fetchConfig#customFetcher',
      },
    },
    './src/lib/sanity/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/data/sanity/**/*.graphql'],
      schema: fetchConfigSanity.endpoint,
    },
    './src/lib/sanity/__generated/graphql.schema.json': {
      plugins: ['introspection'],
      schema: fetchConfigSanity.endpoint
    },
    './src/lib/sanity/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
      schema: fetchConfigSanity.endpoint
    },
    './src/data/sanity': {
      documents: ['./src/data/sanity/**/*.graphql'],
      preset: 'near-operation-file',
      schema: fetchConfigSanity.endpoint,
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '../../lib/sanity/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: '@src/lib/fetchConfig#customFetcherSanity',
      },
    },
    './src/lib/contentful/__generated/graphql.schema.json': {
      plugins: ['introspection'],
      schema: [
        {
          [fetchConfig.endpoint]: fetchConfig.params,
        },
      ],
    },
    './src/lib/contentful/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
      schema: [
        {
          [fetchConfig.endpoint]: fetchConfig.params,
        },
      ],
    },
    './src/lib/contentful/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/data/contentful/**/*.graphql'],
      schema: [
        {
          [fetchConfig.endpoint]: fetchConfig.params,
        },
      ],
    },
    './src/data/contentful': {
      documents: ['./src/data/contentful/**/*.graphql'],
      preset: 'near-operation-file',
      schema: [
        {
          [fetchConfig.endpoint]: fetchConfig.params,
        },
      ],
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '../../lib/contentful/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
        withHooks: true,
        fetcher: '@src/lib/fetchConfig#customFetcher',
      },
    }
  },
};

export default config;
