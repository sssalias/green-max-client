import { LogoutStorage } from '@/features/logout/lib';
import { useNavigate } from 'react-router-dom';

export const useLogoutUser = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    LogoutStorage.deleteLoginData();
    navigate('/login');
  };

  return { logoutUser };
};
