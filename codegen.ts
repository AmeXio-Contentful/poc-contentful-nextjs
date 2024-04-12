import type { CodegenConfig } from '@graphql-codegen/cli';
import { fetchConfig} from "./src/lib/fetchConfig";

export const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [fetchConfig.endpoint]: fetchConfig.params,
    },
  ],
  generates: {
    './src/lib/__generated/graphql.types.ts': {
      plugins: ['typescript', 'typescript-operations'],
      documents: ['./src/**/*.graphql'],
    },
    './src/': {
      documents: ['./src/**/*.graphql'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: 'lib/__generated/graphql.types.ts',
        folder: '__generated',
      },
      plugins: [
        'typescript-operations',
        'typescript-react-query'
      ],
      config: {
        addExplicitOverride: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        exposeSuspendQuery: true,
        reactQueryVersion: 5,
        legacyMode: false,
        fetcher: {
          func: '@/lib/fetchConfig#customFetcher',
          isReactHook: false,
        }
      },
    },
  },
};

export default config;
