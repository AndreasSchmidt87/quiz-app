const answerButton = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="qcard__answer"]');

answerButton.addEventListener('click', () => {
    answer.classList.toggle("hidden");
});