import { Header } from './components/header';
import './globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Psychologists</title>
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
