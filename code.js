const slider = document.querySelector('.switch');
const DarkThemeBG = document.querySelectorAll('.bg-dark');
const DarkThemeTXT = document.querySelectorAll('.text-white');
const boxWrapper = document.querySelector('.boxWrapper');
const card = document.querySelector('.card')

let navbar = document.querySelector('.navbar');



console.log(slider);


slider.addEventListener('click',() =>{
  navbar.classList.remove("bg-dark");
  navbar.classList.add("bg-light");

})