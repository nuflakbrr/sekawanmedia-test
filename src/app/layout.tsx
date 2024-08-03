import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter as FontSans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

import { AuthProvider } from '@/context/AuthContext';
import ThemeProvider from '@/providers/ThemeProvider';
import ToastProvider from '@/providers/ToastProvider';
import TooltipProvider from '@/providers/TooltipProvider';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Sekawan Media FE Test',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <AuthProvider>
      <html lang={locale}>
        <body className={fontSans.className}>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider>
                <ToastProvider />
                {children}
              </TooltipProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
