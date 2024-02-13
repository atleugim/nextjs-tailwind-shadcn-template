'use client';

import { setDefaultOptions } from 'date-fns';
import { es } from 'date-fns/locale';
import { Toaster } from 'sonner';
import TailwindIndicator from '~/components/common/tailwind-indicator';

setDefaultOptions({
  locale: es
});

const ExampleProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TailwindIndicator />
      <Toaster position='top-center' richColors />
      {children}
    </>
  );
};

export default ExampleProvider;
