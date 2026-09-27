import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { apiInstance } from '@/shared/api';
import { getLoginData } from '@/features/login/model';

const queryClient = new QueryClient();

// apiInstance.interceptors.request.use((request) => {
//   const loginData = getLoginData();
//
//   if (!loginData) {
//     throw new Error('Not authenticated');
//   }
//   const { idInstance, apiTokenInstance } = loginData;
//   request.url = `/waInstance${idInstance}${request.url}/${apiTokenInstance}`;
//
//   return request;
// });
apiInstance.interceptors.request.use((request) => {
  const loginData = getLoginData();

  if (!loginData) {
    window.location.href = '/login';
    return request;
  }

  const { idInstance, apiTokenInstance } = loginData;

  const url = request.url ?? '';

  request.url = `/waInstance${idInstance}${url.replace(/^(\/[^/]+)/, `$1/${apiTokenInstance}`)}`;

  return request;
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
