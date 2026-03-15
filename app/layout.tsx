import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DatsumoNavi - あなたにピッタリのメンズ脱毛クリニック診断',
  description: '30秒の無料診断であなたに最適なメンズ脱毛クリニックが見つかる。脱毛部位や予算、痛みの感じやすさに合わせて、人気クリニックからベストマッチを提案します。',
  openGraph: {
    title: 'DatsumoNavi - あなたにピッタリのメンズ脱毛クリニック診断',
    description: '30秒の無料診断であなたに最適なメンズ脱毛クリニックが見つかる。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
