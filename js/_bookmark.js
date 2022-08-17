export default function toggleBookmark() {
    const cards = document.querySelectorAll('[data-js="qcards"]');
    cards.forEach((card) => {
        const markButton = card.querySelector('[data-js="markButton"]');
        const emptyMark = card.querySelector('[data-js="bookmark"]');
        const filledMark = card.querySelector('[data-js="bookmarkFilled"]'); // HTMLElement

        markButton.addEventListener('click', () => {
            emptyMark.classList.toggle("hidden");
            filledMark.classList.toggle("hidden");
        });


    });

}
