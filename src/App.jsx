import UserList from './pages/UserList';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="container text-4xl xl:max-w-screen-xl">
        <Header />
        <UserList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
