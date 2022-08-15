export default function toggleBookmark() {
    const cards = document.querySelectorAll('[data-js="qcards"]');
    cards.forEach((card) => {
        const markButtons = card.querySelector('[data-js="markButton"]');
        const emptyMark = card.querySelector('[data-js="bookmark"]');
        const filledMark = card.querySelector('[data-js="bookmarkFilled"]');
        
        markButtons.addEventListener('click', () => {
                if (filledMark === true) {
                    emptyMark.classList.toggle("hidden");
                    document.markButtons.addElement("filledMark");
                    filledMark.remove();
                    return;
                } else {
                    filledMark.classList.toggle("hidden");
                    document.markButtons.addElement("emptyMark");
                    emptyMark.remove();
                    return;
                }
            });

        


    });
        
}
