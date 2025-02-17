import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import config from './js/config';
import { routes } from './routes';
import ErrorBoundary from './components/ErrorBoundary';

const Router: React.FC = () => (
  <ErrorBoundary>
    <BrowserRouter basename={config.repoName}>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        ))}
        <Route path="*" element={<Navigate to={config.routes.home} replace />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default Router;
