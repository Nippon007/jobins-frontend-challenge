import { QueryClient, QueryClientProvider } from 'react-query';
import './assets/scss/main.scss';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { SidebarProvider, useSidebar } from './provider/SidebarTogglerProvider';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <section className="flex h-full w-full">
        <SidebarProvider>
          <Sidebar />
          <Main />
        </SidebarProvider>
      </section>
    </QueryClientProvider>
  );
}

export default App;

function Main() {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <main className={`section-main h-100 ${!isSidebarOpen ? 'collapsed' : ''}`}>
      <Header />
      <Dashboard />
    </main>
  );
}
