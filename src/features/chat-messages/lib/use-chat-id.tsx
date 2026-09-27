import { useSearchParams } from 'react-router-dom';

export const useChatId = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get('id');
};
