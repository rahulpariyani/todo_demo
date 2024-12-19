import './globals.css';
import QueryProvider from '@/components/QueryProvider';

export const metadata = {
  title: 'To-Do App',
  description: 'A simple to-do list application',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
