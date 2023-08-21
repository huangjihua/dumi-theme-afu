import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  // disable mfsu for HMR
  mfsu: false,
  // pass theme config
  themeConfig: {
    name: "示例",
    themeConfig: { deviceWidth: 414 },
  },
  apiParser: {},
  resolve: { entryFile: './src/components/index.ts' },
});
