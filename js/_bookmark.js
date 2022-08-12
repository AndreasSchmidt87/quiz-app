export default function toggleBookmark() {
    const cards = document.querySelectorAll('[data-js="qcards"]');
    cards.forEach((card) => {
        const bookmarkButtons = card.querySelector('[data-js="bookmark"]');
        console.log(bookmarkButtons);
        
        
});
}