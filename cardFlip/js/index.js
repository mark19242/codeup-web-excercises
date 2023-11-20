// (() => {
// 	// TODO: Flip the card when clicked
//     const card= document.querySelectorAll(".card");
//     card.addEventListener("click", (e)=> {
//         e.target.classList.toggle("flipped");
//     });
// })();
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', (e) => {
    const cards = document.querySelectorAll('.card');
    let flippedCards = [];

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!card.classList.contains('flipped')) {

                card.classList.add('flipped');
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    const [card1, card2] = flippedCards;
                    const value1 = card1.querySelector('.card-value').textContent;
                    const value2 = card2.querySelector('.card-value').textContent;

                    if (value1 === value2) {

                        setTimeout(() => {
                            card1.style.visibility = 'hidden';
                            card2.style.visibility = 'hidden';
                        }, 1000);

                        // Clear the flipped cards array
                        flippedCards = [];
                    } else {
                        // Cards with different values are flipped, flip them back
                        setTimeout(() => {
                            card1.classList.remove('flipped');
                            card2.classList.remove('flipped');
                        }, 1000); // Adjust the delay as needed

                        // Clear the flipped cards array
                        flippedCards = [];
                    }
                }
            }
        });
    });
});

