import type { Metadata } from 'next';

import { Header } from './components/header';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Psychologists',
  description: 'Find professional psychologists for your needs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
