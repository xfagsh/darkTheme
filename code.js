const slider = document.querySelector('.switch');
const card = document.querySelectorAll('.card');
let navbar = document.querySelector('.navbar');



console.log(slider);


slider.addEventListener('change',() =>{
  navbar.classList.toggle("bg-dark");
  navbar.classList.toggle("bg-light");
  navbar.classList.toggle("navbar-dark");
  navbar.classList.toggle("navbar-light");
})


for (let i = 0; i < card.length; i++) {
  const cards = card[i];
  slider.addEventListener('change',() =>{
    cards.classList.toggle("bg-dark");
    cards.classList.toggle("bg-light");
    
  })
}