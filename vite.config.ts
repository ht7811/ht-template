import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 帮助简化 Vue Router 的使用
import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      /* options */
      extensions: ['.vue', '.md']
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
      script: {
        // vue3.3之后实验特性
        defineModel: true,
        propsDestructure: true
      }
    }),
    vueJsx(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      dts: './auto-imports.d.ts',
      // vueTemplate: true,
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        VueRouterAutoImports,
        '@vueuse/core',
        'pinia'
      ]
    }),
    Components({
      /* options */
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Layouts({
      // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
      layoutsDirs: 'src/layouts', // 布局文件存放目录
      defaultLayout: 'default' //对应 src/layouts/default.vue
    }),
    VitePWA({})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  preview: {
    open: true
  }
})
