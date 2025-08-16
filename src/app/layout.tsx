import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Persona Canvas | Jeeban',
  description: 'A personal portfolio for Jeeban, a Web Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setTheme(theme) {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  localStorage.setItem('theme', theme);
                }
                var theme = localStorage.getItem('theme');
                if (theme) {
                  setTheme(theme);
                } else {
                  setTheme('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={cn(
          'font-body antialiased',
          'bg-background text-foreground'
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
