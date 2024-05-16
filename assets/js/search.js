const select = document.getElementById('parameters');

select.addEventListener('change', function () {
    const selectedValue = select.value;
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (selectedValue === 'all' || card.classList.contains(selectedValue)) {
            card.classList.remove('hidden'); 
        } else {
            card.classList.add('hidden'); 
        }
    });
});


const search_bar = document.querySelector(".search")
search_bar.addEventListener("input", () => search_bar_update());

function search_bar_update() {
    const text = document.querySelector(".search").value.toLowerCase();
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((Cards) => {
        const h2Content = Cards.querySelector(".card h1").textContent.toLowerCase();
        const wordsInH2 = h2Content.split(' ');
        const inputWords = text.split(' ');
        const isMatch = inputWords.every((inputWord) =>
            wordsInH2.some((word) => word.includes(inputWord))
        );
        if (isMatch) {
            Cards.classList.remove('hidden');
        } else {
            Cards.classList.add('hidden');
        }
    });
}