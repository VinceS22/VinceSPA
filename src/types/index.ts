import { ComponentType } from 'react';

export interface Route {
  path: string;
  component: ComponentType;
  title: string;
}

export interface Config {
  repoName: string;
  routes: {
    home: string;
    about: string;
    contact: string;
  };
}
