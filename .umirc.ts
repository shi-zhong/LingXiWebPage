import { defineConfig } from 'umi';
import { routes } from './src/config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
  	type: 'hash'
  },
  routes: routes,
  fastRefresh: {},
  mfsu: {},
});
