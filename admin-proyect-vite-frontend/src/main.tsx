import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <> 
    <QueryClientProvider client={queryClient}>
         <Router/>
         <ReactQueryDevtools/>
    </QueryClientProvider>
  </>
)
