import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@/pages';

interface IRoute {
  path: string;
  page: React.ReactNode;
}

const RouterData: IRoute[] = [
  {
    path: '/',
    page: <LoginPage />,
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
