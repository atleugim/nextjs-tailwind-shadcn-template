'use client';

import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { User } from '~/core/types/user';
import UsersRepository from '~/core/repositories/users-repository';
import useSearch from '~/core/hooks/use-search';

import { Button } from '../ui/button';

const ExampleComponent = () => {
  const [search, setSearch] = useSearch();

  const { data, isLoading, refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => UsersRepository.getUsers(),
    enabled: false
  });

  const onClick = () => {
    toast.message('¡Hola! 👋', {
      description:
        'Esta es una plantilla para Next.js con TypeScript, Tailwind CSS, Prettier, Husky y ESLint configurados. Mira la URL 😉',
      duration: 5000,
      id: 'greeting'
    });

    refetch();

    if (search) {
      setSearch(null);
      return;
    }

    setSearch('@atleugim');
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Button onClick={onClick} loading={isLoading}>
        Obtener usuarios
      </Button>

      <ul>{data?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
};

export default ExampleComponent;
