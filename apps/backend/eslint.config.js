import eslint from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';


export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylistic,
    eslintPluginPrettier,
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        }
    },
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
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
);