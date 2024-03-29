import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ExampleProvider from '~/core/providers/example-provider';
import '~/core/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

// TODO: Add metadata
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <ExampleProvider>{children}</ExampleProvider>
      </body>
    </html>
  );
}
