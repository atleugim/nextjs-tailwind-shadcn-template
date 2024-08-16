import { Suspense } from 'react';

import ExampleComponent from '~/core/components/common/example-component';

const HomePage = () => {
  return (
    <main className='grid h-dvh w-full place-content-center'>
      <div className='grid max-w-prose gap-4 p-5 text-center'>
        <h1 className='font-mono text-3xl font-bold'>Plantilla Next.js</h1>
        <p>
          Esta es una plantilla para Next.js con TypeScript, Tailwind CSS,
          Prettier, Husky y ESLint configurados.
        </p>
        {/* WHY SUSPENSE?: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
        <Suspense fallback={null}>
          <ExampleComponent />
        </Suspense>
      </div>
    </main>
  );
};

export default HomePage;
