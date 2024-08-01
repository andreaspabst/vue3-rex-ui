import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';

const libConfig = defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/plugins/Vue3RexUI.ts'),
            name: 'Vue3RexUI',
            fileName: 'vue3-rex-ui',
        },
        rollupOptions: {
            external: ['vue'],
            output: { globals: { vue: 'Vue' } },
        },
    },
});

export default mergeConfig(baseConfig, libConfig);