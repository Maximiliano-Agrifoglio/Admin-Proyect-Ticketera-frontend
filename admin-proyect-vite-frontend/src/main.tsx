import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <> 
    <QueryClientProvider client={queryClient}>
         <Router/>
    </QueryClientProvider>
  </>
)
