'use client';

import { toast } from 'sonner';

import { Button } from '../ui/button';

const ExampleButton = () => {
  return (
    <div className='flex justify-center'>
      <Button
        onClick={() =>
          toast.message('¡Hola! 👋', {
            description:
              'Esta es una plantilla para Next.js con TypeScript, Tailwind CSS, Prettier, Husky y ESLint configurados.',
            duration: 5000
          })
        }
      >
        Saluda <span role='img'>👋</span>
      </Button>
    </div>
  );
};

export default ExampleButton;
