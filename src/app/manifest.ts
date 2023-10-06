import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Moetruyen',
    short_name: 'Moe',
    description: 'Trang web đọc truyện tranh từ Yuri Cave',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/static/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/static/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
