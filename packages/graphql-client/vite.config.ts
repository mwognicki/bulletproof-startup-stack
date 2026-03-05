import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
    },
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: (id) => !id.startsWith('.') && !id.startsWith('/'),
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.json',
    }),
  ],
});