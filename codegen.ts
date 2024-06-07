import { CodegenConfig } from '@graphql-codegen/cli';
import { fetchConfigSanity } from './src/lib/sanity/fetcher';
import { fetcherConfigContentful } from './src/lib/contentful/fetcher';

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    './src/lib/sanity/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/data/sanity/**/*.graphql'],
      schema: fetchConfigSanity.endpoint,
    },
    './src/lib/sanity/__generated/graphql.schema.json': {
      plugins: ['introspection'],
      schema: fetchConfigSanity.endpoint,
    },
    './src/lib/sanity/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
      schema: fetchConfigSanity.endpoint,
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
      plugins: ['typescript-operations', 'typescript-react-query'],
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
        fetcher: '@src/lib/sanity/fetcher#customFetcherSanity',
      },
    },
    './src': {
      documents: ['./src/lib/shared-fragments/*.graphql'],
      preset: 'near-operation-file',
      schema: [
        {
          [fetcherConfigContentful.endpoint]: fetcherConfigContentful.params,
        },
      ],
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'lib/contentful/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: ['typescript-operations', 'typescript-react-query'],
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
        fetcher: '@src/lib/contentful/fetcher#customFetcher',
      },
    },
    './src/lib/contentful/__generated/graphql.schema.json': {
      plugins: ['introspection'],
      schema: [
        {
          [fetcherConfigContentful.endpoint]: fetcherConfigContentful.params,
        },
      ],
    },
    './src/lib/contentful/__generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
      schema: [
        {
          [fetcherConfigContentful.endpoint]: fetcherConfigContentful.params,
        },
      ],
    },
    './src/lib/contentful/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/data/fetcher/**/*.graphql'],
      schema: [
        {
          [fetcherConfigContentful.endpoint]: fetcherConfigContentful.params,
        },
      ],
    },
    './src/data/contentful': {
      documents: ['./src/data/contentful/**/*.graphql'],
      preset: 'near-operation-file',
      schema: [
        {
          [fetcherConfigContentful.endpoint]: fetcherConfigContentful.params,
        },
      ],
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '../../lib/contentful/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: ['typescript-operations', 'typescript-react-query'],
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
        fetcher: '@src/lib/contentful/fetcher#customFetcher',
      },
    },
  },
};

export default config;
