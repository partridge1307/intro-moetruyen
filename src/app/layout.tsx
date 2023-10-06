import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { FC } from 'react';

const roboto = Roboto({
  subsets: ['vietnamese'],
  weight: '400',
  variable: '--font-roboto',
  preload: true,
  display: 'swap',
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL!),
  title: 'Moetruyen',
  description: 'Trang web đọc truyện tranh từ Yuri Cave',
  themeColor: 'light',
  colorScheme: 'light',
  referrer: 'origin-when-cross-origin',
  generator: 'Moetruyen',
  keywords: ['Manga'],
  authors: [
    { name: 'Moetruyen', url: 'https://discord.moetruyen.net' },
    {
      name: 'Partridge',
      url: 'https://discord.gg/dong-moe-533169283375693844',
    },
  ],
  openGraph: {
    siteName: 'Moetruyen',
    title: 'Moetruyen',
    description: 'Trang web đọc truyện tranh từ Yuri Cave',
    url: process.env.NEXTAUTH_URL!,
    locale: 'vi',
    countryName: 'VN',
    images: {
      url: '/icon.png',
      alt: 'Moetruyen Icon',
    },
  },
  twitter: {
    site: 'Moetruyen',
    title: 'Moetruyen',
    description: 'Trang web đọc truyện tranh từ Yuri Cave',
    creator: 'Partridge',
    card: 'summary',
    images: {
      url: '/icon.png',
      alt: 'Moetruyen Icon',
    },
  },
  robots: {
    notranslate: true,
  },
};

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <html lang="vi" className={`${roboto.variable} font-sans`}>
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default layout;
