import { services, Service } from './services';

export interface Question {
    id: number;
    text: string;
    subtext?: string;
    options: Option[];
}

export interface Option {
    label: string;
    scores: Record<string, number>;
}

export interface DiagnosisResult {
    service: Service;
    score: number;
    matchRate: number;
    reason: string;
}

interface ConditionalReason {
    condition: (answers: number[]) => boolean;
    text: string;
}

export const questions: Question[] = [
    {
        id: 1,
        text: '一番気になっている脱毛部位はどこですか？',
        subtext: '最も優先したい部位を選んでください',
        options: [
            {
                label: 'ヒゲ（口周り・アゴ・頬）',
                scores: { 'gorilla': 5, 'mens-rize': 4, 'shonan': 5, 'regina-homme': 5, 'mens-eminal': 4, 'mens-tdbc': 5 },
            },
            {
                label: '全身（腕・脚・胸・背中）',
                scores: { 'gorilla': 4, 'mens-rize': 5, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 5, 'mens-tdbc': 2 },
            },
            {
                label: 'VIO（デリケートゾーン）',
                scores: { 'gorilla': 4, 'mens-rize': 5, 'shonan': 3, 'regina-homme': 4, 'mens-eminal': 4, 'mens-tdbc': 1 },
            },
            {
                label: '全身+ヒゲ+VIO すべて',
                scores: { 'gorilla': 4, 'mens-rize': 5, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 5, 'mens-tdbc': 1 },
            },
        ],
    },
    {
        id: 2,
        text: '脱毛にかけられる予算はどのくらいですか？',
        subtext: 'コース全体の総額イメージで選んでください',
        options: [
            {
                label: 'できるだけ安く抑えたい（10万円以下）',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 5, 'regina-homme': 3, 'mens-eminal': 5, 'mens-tdbc': 2 },
            },
            {
                label: 'コスパ重視（10〜30万円）',
                scores: { 'gorilla': 4, 'mens-rize': 5, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 4, 'mens-tdbc': 3 },
            },
            {
                label: '効果重視なら多少高くてもOK（30万円以上）',
                scores: { 'gorilla': 5, 'mens-rize': 4, 'shonan': 3, 'regina-homme': 5, 'mens-eminal': 3, 'mens-tdbc': 4 },
            },
            {
                label: '月々の支払いを抑えたい',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 4, 'regina-homme': 3, 'mens-eminal': 5, 'mens-tdbc': 3 },
            },
        ],
    },
    {
        id: 3,
        text: '痛みに対してどのくらい不安がありますか？',
        options: [
            {
                label: 'かなり不安。麻酔は必須',
                scores: { 'gorilla': 5, 'mens-rize': 3, 'shonan': 2, 'regina-homme': 5, 'mens-eminal': 3, 'mens-tdbc': 1 },
            },
            {
                label: '多少の痛みなら我慢できる',
                scores: { 'gorilla': 4, 'mens-rize': 4, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 4, 'mens-tdbc': 3 },
            },
            {
                label: '痛みが少ない方法がいい',
                scores: { 'gorilla': 3, 'mens-rize': 4, 'shonan': 3, 'regina-homme': 3, 'mens-eminal': 5, 'mens-tdbc': 2 },
            },
            {
                label: '痛みはあまり気にしない',
                scores: { 'gorilla': 3, 'mens-rize': 4, 'shonan': 4, 'regina-homme': 3, 'mens-eminal': 3, 'mens-tdbc': 4 },
            },
        ],
    },
    {
        id: 4,
        text: '通いやすさで重視するポイントは？',
        options: [
            {
                label: '自宅や職場の近くに院があること',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 5, 'regina-homme': 3, 'mens-eminal': 4, 'mens-tdbc': 3 },
            },
            {
                label: '男性専門で気兼ねなく通えること',
                scores: { 'gorilla': 5, 'mens-rize': 4, 'shonan': 2, 'regina-homme': 5, 'mens-eminal': 3, 'mens-tdbc': 4 },
            },
            {
                label: '予約が取りやすいこと',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 5, 'mens-tdbc': 4 },
            },
            {
                label: '追加費用がかからないこと',
                scores: { 'gorilla': 5, 'mens-rize': 5, 'shonan': 3, 'regina-homme': 5, 'mens-eminal': 4, 'mens-tdbc': 3 },
            },
        ],
    },
    {
        id: 5,
        text: '脱毛の経験はありますか？',
        options: [
            {
                label: '全くの初めて',
                scores: { 'gorilla': 4, 'mens-rize': 4, 'shonan': 5, 'regina-homme': 4, 'mens-eminal': 5, 'mens-tdbc': 4 },
            },
            {
                label: 'サロン脱毛の経験あり（効果に不満）',
                scores: { 'gorilla': 5, 'mens-rize': 4, 'shonan': 3, 'regina-homme': 5, 'mens-eminal': 3, 'mens-tdbc': 3 },
            },
            {
                label: '医療脱毛の経験あり（追加照射したい）',
                scores: { 'gorilla': 4, 'mens-rize': 5, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 3, 'mens-tdbc': 3 },
            },
            {
                label: '自己処理だけしてきた',
                scores: { 'gorilla': 4, 'mens-rize': 4, 'shonan': 4, 'regina-homme': 4, 'mens-eminal': 5, 'mens-tdbc': 4 },
            },
        ],
    },
    {
        id: 6,
        text: '脱毛に求める仕上がりは？',
        options: [
            {
                label: 'ツルツルにしたい（完全脱毛）',
                scores: { 'gorilla': 5, 'mens-rize': 5, 'shonan': 4, 'regina-homme': 5, 'mens-eminal': 4, 'mens-tdbc': 3 },
            },
            {
                label: '自然に薄くしたい（減毛）',
                scores: { 'gorilla': 4, 'mens-rize': 4, 'shonan': 5, 'regina-homme': 4, 'mens-eminal': 5, 'mens-tdbc': 3 },
            },
            {
                label: 'デザインして整えたい',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 2, 'regina-homme': 3, 'mens-eminal': 2, 'mens-tdbc': 5 },
            },
            {
                label: 'まずは効果を試してみたい',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 5, 'regina-homme': 3, 'mens-eminal': 5, 'mens-tdbc': 4 },
            },
        ],
    },
    {
        id: 7,
        text: '最も重視するポイントを1つ選んでください',
        options: [
            {
                label: '脱毛効果の高さ',
                scores: { 'gorilla': 5, 'mens-rize': 4, 'shonan': 3, 'regina-homme': 5, 'mens-eminal': 3, 'mens-tdbc': 4 },
            },
            {
                label: '料金の安さ',
                scores: { 'gorilla': 3, 'mens-rize': 4, 'shonan': 5, 'regina-homme': 3, 'mens-eminal': 5, 'mens-tdbc': 2 },
            },
            {
                label: 'サポート体制の充実さ',
                scores: { 'gorilla': 5, 'mens-rize': 4, 'shonan': 3, 'regina-homme': 5, 'mens-eminal': 3, 'mens-tdbc': 4 },
            },
            {
                label: '通いやすさ・利便性',
                scores: { 'gorilla': 3, 'mens-rize': 3, 'shonan': 5, 'regina-homme': 3, 'mens-eminal': 5, 'mens-tdbc': 4 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    'gorilla': [
        { condition: (a) => a[0] === 0 && a[2] === 0, text: 'ヒゲ脱毛を希望し痛みが不安とのことでしたので、笑気ガス麻酔を含む2種類の麻酔が使えるゴリラクリニックが最適です。4種の脱毛機で濃いヒゲにもしっかり対応します。' },
        { condition: (a) => a[2] === 0, text: '痛みへの不安が強いとのことでしたので、笑気ガスと麻酔クリームの2種類の麻酔が完備されたゴリラクリニックがおすすめです。' },
        { condition: (a) => a[3] === 1, text: '男性専門の環境を重視されているとのこと。ゴリラクリニックは完全男性専門で、女性患者と顔を合わせることなく通えます。' },
        { condition: () => true, text: '4種類の脱毛機と2種類の麻酔を備えた男性専門クリニック。追加費用なしで安心して通えます。' },
    ],
    'mens-rize': [
        { condition: (a) => a[0] === 3 && a[1] === 1, text: '全身+ヒゲ+VIOの脱毛をコスパ良く受けたいとのこと。メンズリゼは全身+ヒゲ5回が約29万円と相場よりお得で、コース後も割引で追加照射できます。' },
        { condition: (a) => a[4] === 2, text: '医療脱毛の経験があり追加照射をご希望とのこと。メンズリゼはコース終了後も特別価格で追加照射でき、長期的にコスパが最も良いクリニックです。' },
        { condition: (a) => a[1] === 1, text: 'コスパを重視されているとのこと。メンズリゼは追加費用なし+コース後割引があり、長期的に見て最もコスパが良い選択です。' },
        { condition: () => true, text: 'コース終了後も割引価格で追加照射できるため、長期的に見てコスパに優れたクリニックです。' },
    ],
    'shonan': [
        { condition: (a) => a[0] === 0 && a[1] === 0, text: 'ヒゲ脱毛をできるだけ安くとのご希望に最適。湘南美容のヒゲ脱毛6回16,800円は業界最安水準です。' },
        { condition: (a) => a[3] === 0, text: '自宅や職場の近くに院があることを重視されているとのこと。全国200院以上の湘南美容なら、通いやすい院が見つかります。' },
        { condition: (a) => a[1] === 0, text: 'できるだけ安く脱毛を始めたいとのこと。湘南美容は業界最安水準の料金設定で、初めての脱毛にも最適です。' },
        { condition: () => true, text: '全国200院以上の圧倒的な院数と業界最安水準の料金。有効期限なしで自分のペースで通えます。' },
    ],
    'regina-homme': [
        { condition: (a) => a[2] === 0 && a[3] === 3, text: '痛みへの不安が強く追加費用なしを重視されているとのこと。レジーナクリニックオムは麻酔クリーム無料（1回3,300円相当）で追加費用が完全にゼロです。' },
        { condition: (a) => a[2] === 0, text: '痛みが不安とのことでしたので、麻酔クリームが無料で使えるレジーナクリニックオムが最適です。高出力レーザーで効果も期待できます。' },
        { condition: (a) => a[6] === 0, text: '脱毛効果の高さを重視されているとのこと。高出力のジェントルマックスプロを導入し、効果を実感しやすいレジーナクリニックオムがおすすめです。' },
        { condition: () => true, text: '麻酔無料・追加費用ゼロ・高出力レーザーの三拍子が揃った男性専門クリニックです。' },
    ],
    'mens-eminal': [
        { condition: (a) => a[1] === 3, text: '月々の支払いを抑えたいとのこと。メンズエミナルは月々1,030円から始められ、無理のない支払いプランが組めます。' },
        { condition: (a) => a[4] === 0 && a[1] === 0, text: '初めての脱毛で予算を抑えたいとのこと。メンズエミナルは月額制で始めやすく、蓄熱式で痛みも少ないため初心者に最適です。' },
        { condition: (a) => a[2] === 2, text: '痛みの少ない方法をご希望とのこと。メンズエミナルの蓄熱式脱毛機は従来の熱破壊式より痛みが少なく、快適に施術を受けられます。' },
        { condition: () => true, text: '月々1,030円から始められる手軽さと、痛みの少ない蓄熱式脱毛機が魅力のクリニックです。' },
    ],
    'mens-tdbc': [
        { condition: (a) => a[5] === 2, text: 'ヒゲのデザイン脱毛をご希望とのこと。メンズTBCの美容電気脱毛なら1本単位で処理でき、理想のヒゲデザインが実現できます。' },
        { condition: (a) => a[0] === 0 && a[5] === 2, text: 'ヒゲを整えたいとのこと。メンズTBCなら毛を1本ずつ処理し、自分好みのヒゲデザインに仕上げることができます。' },
        { condition: (a) => a[5] === 3, text: 'まずは効果を試したいとのこと。メンズTBCは初回1,000円のお試しプランがあり、気軽に体験ができます。' },
        { condition: () => true, text: '美容電気脱毛で1本ずつ確実に脱毛。ヒゲのデザインや部分脱毛に最適なサロンです。' },
    ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) {
        for (const r of reasons) {
            if (r.condition(answers)) return r.text;
        }
    }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => { scoreMap[s.id] = 0; });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) { scoreMap[serviceId] += score; }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({ service, score: scoreMap[service.id] || 0, matchRate: 0, reason: selectReason(service.id, answers, service.tagline) }))
        .sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;
    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
