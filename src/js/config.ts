import { Config } from '../types';

declare const __REPO_NAME__: string;

const config: Config = {
  repoName: __REPO_NAME__,
  routes: {
    home: '/',
    about: '/about',
    contact: '/contact'
  }
};

export default config;
