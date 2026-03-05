import eslint from '@eslint/js';
import {tanstackConfig} from '@tanstack/eslint-config';
import pluginQuery from '@tanstack/eslint-plugin-query';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylistic,
    tanstackConfig,
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
    ...pluginQuery.configs['flat/recommended'],
    eslintPluginPrettier,
    {
        languageOptions: {
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            'react-hooks': reactHooks,
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'sort-keys': [
                'warn',
                'asc',
                {
                    caseSensitive: false,
                    natural: true,
                    minKeys: 4,
                    allowLineSeparatedGroups: true,
                },
            ],
        },
    },
    {
        files: ['**/*.tsx'],
        rules: {
            '@typescript-eslint/no-floating-promises': 'off',

            // Type safety
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'warn',

            // Component structure & readability
            'react/self-closing-comp': 'error',
            'react/jsx-sort-props': ['warn', {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,       // key, ref always first
                multiline: 'last',         // multiline props (children, render) go last
                noSortAlphabetically: true, // don't force alpha, just enforce the groups above
            }],
            'react/hook-use-state': 'warn',       // enforces [value, setValue] naming convention
            'react/jsx-no-useless-fragment': 'warn',
            'react/no-array-index-key': 'warn',

            // Performance
            'react/jsx-no-bind': ['warn', {
                allowArrowFunctions: false, // inline arrows recreated every render
                allowFunctions: false,
                allowBind: false,
                ignoreDOMComponents: true,  // less noisy on native elements
            }],
        },
    }
);