import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '脱毛診断 | DatsumoNavi - あなたに最適なクリニックを見つけよう',
    description:
        '7つの質問に答えるだけで、あなたにピッタリのメンズ脱毛クリニックがわかります。脱毛部位、予算、痛みの不安から総合的に分析。',
    openGraph: {
        title: '脱毛診断 | DatsumoNavi',
        description: '7つの質問であなたにピッタリのメンズ脱毛クリニックを診断。30秒で結果がわかります。',
        type: 'website',
        locale: 'ja_JP',
    },
};

export default function DiagnosisLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
