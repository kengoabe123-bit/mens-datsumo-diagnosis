import Link from 'next/link';

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>清潔感のある自分へ。<br />最適な脱毛クリニックが見つかる。</h1>
        <p>7つの質問に答えるだけで、あなたの希望にピッタリのメンズ脱毛クリニックが見つかります。</p>
        <div className="hero-features">
          <span className="hero-feature">約30秒で完了</span>
          <span className="hero-feature">7問の簡単な質問</span>
          <span className="hero-feature">個人情報不要</span>
        </div>
        <Link href="/diagnosis" className="btn-primary" id="start-diagnosis-hero">
          無料で診断する
        </Link>
      </div>
    </section>
  );
}
