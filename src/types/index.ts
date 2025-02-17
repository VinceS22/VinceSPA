import { ComponentType } from 'react';

export interface Route {
  path: string;
  component: ComponentType;
  title: string;
}

export interface Config {
  repoName: string;
  routes: {
    [key: string]: string;
  };
}
