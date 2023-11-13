const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let currentIndex = 0; // Index de l'image actuelle

// Sélection des éléments nécessaires
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

// Ajout des écouteurs d'événements pour les flèches
document.querySelector('.arrow_left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

document.querySelector('.arrow_right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Ajout des écouteurs d'événements pour les points
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagLine.innerHTML = slides[currentIndex].tagLine;

    // Mettre à jour la classe "dot_selected"
    dots.forEach(dot => dot.classList.remove('dot_selected'));
    dots[currentIndex].classList.add('dot_selected');
}

// Initialisation du carrousel
updateCarousel();
