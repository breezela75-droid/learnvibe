const quotes = [
    {
        text: "성공의 비결은 시작하는 것이다.",
        author: "마크 트웨인"
    },
    {
        text: "나는 내가 더 노력할수록 운이 좋아진다는 것을 발견했다.",
        author: "토마스 제퍼슨"
    },
    {
        text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 중요한 것은 계속 나아가는 용기이다.",
        author: "윈스턴 처칠"
    },
    {
        text: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 옳다.",
        author: "헨리 포드"
    },
    {
        text: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다.",
        author: "피터 드러커"
    },
    {
        text: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.",
        author: "알버트 아인슈타인"
    },
    {
        text: "오늘 나무 그늘에 앉아 쉴 수 있는 것은 오래 전에 누군가가 나무를 심었기 때문이다.",
        author: "워렌 버핏"
    },
    {
        text: "가장 큰 위험은 아무런 위험도 감수하지 않는 것이다.",
        author: "마크 저커버그"
    },
    {
        text: "혁신은 리더와 추종자를 구분하는 잣대이다.",
        author: "스티브 잡스"
    },
    {
        text: "나는 실패한 것이 아니다. 나는 단지 효과가 없는 만 가지 방법을 발견했을 뿐이다.",
        author: "토마스 에디슨"
    }
];

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

let lastQuoteIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}

function displayQuote() {
    const randomQuote = getRandomQuote();
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    
    setTimeout(() => {
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 300);
}

newQuoteBtn.addEventListener('click', displayQuote);

// 페이지 로드 시 첫 명언 표시
displayQuote();
