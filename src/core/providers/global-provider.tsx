'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setDefaultOptions } from 'date-fns';
import { es } from 'date-fns/locale';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from 'sonner';

import GithubStarButton from '../components/common/github-star';
import TailwindIndicator from '../components/common/tailwind-indicator';

setDefaultOptions({
  locale: es
});

const queryClient = new QueryClient();

const ExampleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <GithubStarButton />
        <TailwindIndicator />
        <Toaster position='top-center' richColors duration={4000} />
        {children}
      </QueryClientProvider>
    </NuqsAdapter>
  );
};

export default ExampleProvider;
