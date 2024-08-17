import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  shared: {
    NODE_ENV: z.enum(['development', 'production']),
    NEXT_PUBLIC_API_URL: z.string().url()
  },
  server: {
    SECRET: z.string().min(1)
  },
  client: {
    NEXT_PUBLIC_CLIENT_SIDE_KEY: z.string().min(1)
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_CLIENT_SIDE_KEY: process.env.NEXT_PUBLIC_CLIENT_SIDE_KEY
  }
});
