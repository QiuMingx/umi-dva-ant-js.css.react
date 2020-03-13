import { defineConfig } from 'umi';

export default defineConfig({
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
          antd: true,
          dva: true,
          dynamicImport: false,
          title: 'hero',
          dll: false,
          routes: {
            exclude: [],
          },
          hardSource: false,
        }],
      ],
});