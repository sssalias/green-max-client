import { Navigate, Route, Routes } from 'react-router-dom';
import { ChatPage, LoginPage } from '@/pages';

interface IRoute {
  path: string;
  page: React.ReactNode;
}

const RouterData: IRoute[] = [
  {
    path: '/',
    page: <Navigate to="/chat" />,
  },
  {
    path: '/login',
    page: <LoginPage />,
  },
  {
    path: '/chat',
    page: <ChatPage />,
  },
];

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {RouterData.map((el) => (
        <Route key={el.path} path={el.path} element={el.page} />
      ))}
    </Routes>
  );
};
export default AppRouter;
