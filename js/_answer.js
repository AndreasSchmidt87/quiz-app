export default function toggleAnswer() {
    const cards = document.querySelectorAll('[data-js="qcards"]');
    cards.forEach((card) => {
        
        const answerButton = card.querySelector('[data-js="button"]');
        const answer = card.querySelector('[data-js="qcard__answer"]');
        answerButton.addEventListener('click', () => {
            answer.classList.toggle("hidden");
            console.log(answer);
    });
});
}