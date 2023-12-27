//Script du carrousel.

// Informations des slides du carrousel. 
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

//Bloc déclaration des variables
let dotRadio = document.querySelectorAll(".dot")
let image = document.querySelector("#banner img")
let tagLine = document.querySelector("#banner p")
let imageIndex = 0

//Fonction changeant le style CSS des points et actualise la position dans le tableau de l'image et du texte.
function newIndex() {
	dotRadio.forEach((dot) =>{
		dot.classList.remove("dot_selected")
	})
	dotRadio[imageIndex].classList.add("dot_selected")
	image.src = `./assets/images/slideshow/${slides[imageIndex].image}`
	tagLine.innerHTML = slides[imageIndex].tagLine
}

newIndex()

//Bloc radio. Ecoute les événements de clic pour chaque point dans le diaporama. et actualise la position dans le tableau de l'image et du texte.
for(let i = 0; i < slides.length; i++) {
    dotRadio[i].addEventListener("click", () => {
        imageIndex = i
        newIndex()
    })
}
//Bloc fleche gauche. Décrémente l'index de l'image.
let leftArrow=document.querySelector(".arrow_left")
    leftArrow.addEventListener("click", () => {
       // imageIndex = (imageIndex - 1 + slides.length) % slides.length
	    imageIndex=imageIndex -1
		if(imageIndex < 0 ){
			imageIndex = slides.length-1
		}   	
		newIndex()
	})

//Bloc fleche droite. Inrémente l'index de l'image.
let rightArrow=document.querySelector(".arrow_right")
	rightArrow.addEventListener("click", () => {
		//imageIndex = (imageIndex + 1 + slides.length) % slides.length
		imageIndex=imageIndex +1
		if(imageIndex > (slides.length-1) ){
			imageIndex = 0
		}		
		newIndex()
	})