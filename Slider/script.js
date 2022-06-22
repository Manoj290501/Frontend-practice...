const container=document.querySelector('.slider')
const imagesSlider=document.querySelectorAll('.slider img')

const prev=document.querySelector('#prevbtn')
const next=document.querySelector('#nextbtn')
const navigationDots = document.querySelector(".navigation-dots");

let size=imagesSlider[0].clientWidth;
let num=imagesSlider.length;

let counter=0
let temp=0;
function init() {
  
    imagesSlider.forEach((img, i) => {
      img.style.left = i * 100 + "%";
    });
  
    imagesSlider[0].classList.add("active");
    createNavigationDots();
  }
  
  init();

  function createNavigationDots() {
    for (let i = 0; i < num; i++) {
      const dot = document.createElement("div");
      dot.classList.add("single-dot");
      navigationDots.appendChild(dot);
  
      dot.addEventListener("click", () => {
        gotoslide(i);
      });
    }
  
    navigationDots.children[0].classList.add("active");
  }

next.addEventListener("click" ,()=>{
    if(counter>=num-1){
        gotoslide(0);
        return;
    }
    counter++;
    gotoslide(counter)
});

prev.addEventListener("click" ,()=>{
    if(counter<=0){
        gotoslide(num-1)
        return;
    }
    counter--;
    gotoslide(counter)
});

function gotoslide(slideNumber){
    container.style.transition= "2s";
    container.style.transform="translateX(-"+ size*slideNumber +"px)";
    counter=slideNumber;
    temp=counter;
    setActiveClass();
}


setInterval(function() {
    gotoslide(temp);
    temp++;
    if(temp>=num){
        temp=0;
    }
    setInterval;
}, 3000);

function setActiveClass() {
  
    let currentActive = document.querySelector(".slider img.active");
    currentActive.classList.remove("active");
    imagesSlider[counter].classList.add("active");
  
   
  
    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[counter].classList.add("active");
  }