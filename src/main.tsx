import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './state/store.ts';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
