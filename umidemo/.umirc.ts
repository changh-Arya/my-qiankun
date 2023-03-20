import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/umi', component: '@/pages/index' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },
});
