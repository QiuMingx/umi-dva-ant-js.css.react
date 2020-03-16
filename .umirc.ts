import { defineConfig } from 'umi';

export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com/web201605/js/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
});
