import { defineConfig } from 'umi';
const path = require('path');
console.log(path.resolve(__dirname, 'src/models'), __dirname);
export default defineConfig({
  proxy: {
    '/api': {
      target: 'https://pvp.qq.com/web201605/js/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  alias: {
    utils: path.resolve(__dirname, 'src/utils'),
    services: path.resolve(__dirname, 'src/services'),
    models: path.resolve(__dirname, 'src/models'),
  },
});
