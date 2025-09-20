import '../css/app.css';
import './bootstrap';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ErrorBoundary from './shared/components/ErrorBoundary';

const _appName = import.meta.env.VITE_APP_NAME || 'BEM FISIP UB 2025';
const isDevelopment = import.meta.env.DEV;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

createInertiaApp({
  title: (title) =>
    title ? `${title} | BEM FISIP UB 2025` : 'BEM FISIP UB 2025',
  
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`, 
      import.meta.glob('./Pages/**/*.jsx'), 
    ),

  setup({ el, App, props }) {
    createRoot(el).render(
      <React.StrictMode>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <App {...props} />
            {isDevelopment && <ReactQueryDevtools initialIsOpen={false} />}
          </QueryClientProvider>
        </ErrorBoundary>
      </React.StrictMode>,
    );
  },
});