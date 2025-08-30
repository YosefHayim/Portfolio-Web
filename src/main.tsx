import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { SidebarProvider } from './Components/ui/sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </BrowserRouter>
);
