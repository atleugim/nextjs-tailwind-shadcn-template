'use client';

import { useId } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { User } from '~/core/types/user';
import UsersRepository from '~/core/repositories/users-repository';
import useSearch from '~/core/hooks/use-search';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

const ExampleComponent = () => {
  const toastId = useId();
  const [search, setSearch] = useSearch();

  const { data, isLoading, error, refetch } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => UsersRepository.getUsers(),
    retry: false
  });

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Input
        type='text'
        value={search ?? ''}
        onChange={onSearch}
        placeholder='Buscar usuarios'
        className='max-w-sm'
        onClick={() => {
          toast.message('Mira la URL 😉', {
            description:
              'Cada vez que escribas algo en el input, la URL cambiará',
            id: toastId
          });
        }}
        disabled={isLoading || !data || error != null}
      />

      {isLoading && <div>Cargando...</div>}

      <ul>
        {data
          ?.filter((user) =>
            user.name.toLowerCase().includes(search?.toLowerCase())
          )
          .map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
      {error && (
        <>
          <div className='text-red-500'>{error.message}</div>
          <Button onClick={() => refetch()} disabled={isLoading}>
            Reintentar
          </Button>
        </>
      )}
    </div>
  );
};

export default ExampleComponent;
