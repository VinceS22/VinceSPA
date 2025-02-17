import { Route } from './types';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import config from './js/config';

export const routes: Route[] = [
  {
    path: config.routes.home,
    component: Home,
    title: 'Home'
  },
  {
    path: config.routes.about,
    component: About,
    title: 'About'
  },
  {
    path: config.routes.contact,
    component: Contact,
    title: 'Contact'
  }
];
