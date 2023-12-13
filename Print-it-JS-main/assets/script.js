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

let leftArrow=document.querySelector(".arrow_left")
	console.log(leftArrow)

let rightArrow=document.querySelector(".arrow_right")
	console.log(rightArrow)



document.addEventListener("DOMContentLoaded", ()=>{
	console.log("coucou3")
	leftArrow.addEventListener("click",()=>{
		alert("clickgauche")
	})	
	rightArrow.addEventListener("click",()=>{
		alert("clickdroit")
	})
})



//let dotRadio = document.querySelectorAll("input[type=radio]")
//for (let i = 0; i < dotRadio.length; i++){
//		if(dotRadio[i].checked){
//			console.log(dotRadio[i].value)
//		}
//	
//}

//let dotRadio = document.querySelectorAll(".dots input[type=radio]")
//
//dotRadio.forEach((button) => {
//    button.addEventListener("change", () => {
//        console.log("button");
//    });
//});

// ***********
//let dotRadio = document.querySelectorAll(".dots input[type=radio]")
//for (let index = 0; index < dotRadio.length;index++){
//	dotRadio[index].addEventListener("change", (event) => {
//	console.log(event.target.value)
//	})
//}
//****************


//let dotRadio = document.querySelectorAll(".dots input[type=radio]")
//for (let index = 0; index < dotRadio.length;index++){
//	dotRadio[index].addEventListener("change", () => {
//	if (dotRadio.change){
//		let image = document.querySelector("#banner img")
//		image.src = "./assets/images/slideshow/slide2.jpg"
//	}
//	})
//}

let dotRadio = document.querySelectorAll("input[type=radio]");
let image = document.querySelector("#banner img");
dotRadio.forEach((radio) => {
    radio.addEventListener("change", () => {
        if (radio.checked) {
            image.src = `./assets/images/slideshow/slide${radio.value}.jpg`;
        }
    });
});