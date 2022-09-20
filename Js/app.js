let mySlider = [
  'img/sekil3.jpg',
  'img/sekil1.jpg',
  'img/sekil4.jpg',
]

let img = document.querySelector('#slider img');
let index = 0;
img.src = mySlider[index]

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click',function() {
  index++;
  if (index > mySlider.length -1) {
    index = 0;
  }
  img.src = mySlider[index]
})

prev.addEventListener('click',function() {
  index--;
  if(index == -1) {
    index = mySlider.length - 1;
  }
  img.src = mySlider[index]
})

function AutoPlay() {
  index++;
  if (index > mySlider.length -1) {
    index = 0;
  }
  img.src = mySlider[index]
}

setInterval(() => {
  AutoPlay();
}, 3000);