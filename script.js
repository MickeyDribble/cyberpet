const playAgain = document.getElementById("playAgain");
const charmanderImage = document.getElementById("charButton");
const squirtleImage = document.getElementById("squiButton");
const bulbasaurImage = document.getElementById("bulbButton");
const progress1 = document.getElementById("progressbar1");
const progress2 = document.getElementById("progressbar2");
const progress3 = document.getElementById("progressbar3");
const progress4 = document.getElementById("progressbar4");
const progress5 = document.getElementById("progressbar5");
const progress = document.getElementById("barContainer");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const start = document.getElementById("start");
const water = document.getElementById("water");
const button4 = document.getElementById("button4");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const button = document.getElementsByTagName("button");
const labels = document.getElementById("labelContainer");
const specialLabel = document.getElementById("specialLabel");
const charSound = new Audio("sounds/charmander.mp3");
const bulbSound = new Audio("sounds/bulbasaur.mp3");
const squirSound = new Audio("sounds/squirtle.mp3");
const battleSound = new Audio("sounds/battle.mp3");


class Pokemon {
  constructor(hunger, boredom, thirst) {
    this.hunger = hunger;
    this.boredom = boredom;
    this.thirst = thirst;
  }
}

class Bulbasaur extends Pokemon {
  constructor(sun) {
    super(70, 55, 30)
    this.sun = sun;
  }
}

class Charmander extends Pokemon {
  constructor(arson) {
    super(55, 65, 90)
    this.arson = arson;
  }
}

class Squirtle extends Pokemon {
  constructor(swimPractice) {
    super(60, 55, 50)
    this.swimPractice = swimPractice;
  }  
}

const charChoice = new Charmander(55);
const bulbChoice = new Bulbasaur(55);
const squiChoice = new Squirtle(65);

playAgain.style.display = "none";

charmanderImage.addEventListener("click", () => {  
  charSound.volume = 0.3;
  charSound.play(); 
  title.textContent = "You chose Charmander!";
  subtitle.textContent = "Don't let their flame go out!";
  charmanderImage.disabled = true;
  squirtleImage.style.display = "none";
  bulbasaurImage.style.display = "none";
  
  progress1.value = charChoice.hunger;
  progress2.value = charChoice.boredom;
  progress3.value = charChoice.thirst;
  progress4.value = charChoice.arson;  
  progress.style.display = "flex"; 
  labels.style.display = "flex";
  specialLabel.textContent = "Fire power";
  start.style.display = "block";
  start.addEventListener("click", () => {
    move();
    battleSound.volume = 0.1;
    battleSound.play();
    start.style.display = "none";
    feed.style.display = "block";
    water.style.display = "block";
    play.style.display = "block";
    button4.style.display = "block";
    button4.textContent = "Commit arson";
    button4.style.fontSize = "30px"; 
  })  
})
squirtleImage.addEventListener("click", () => {
  squirSound.volume = 0.3;
  squirSound.play();
  title.textContent = "You chose Squirtle!";
  subtitle.textContent = "Don't let them dry out!";
  squirtleImage.disabled = true;
  charmanderImage.style.display = "none";
  bulbasaurImage.style.display = "none";
  progress1.value = squiChoice.hunger;
  progress2.value = squiChoice.boredom;
  progress3.value = squiChoice.thirst;
  progress4.value = squiChoice.swimPractice;  
  progress.style.display = "flex";  
  labels.style.display = "flex";
  specialLabel.textContent = "Water power";
  start.style.display = "block";
  start.addEventListener("click", () => {
    move();
    battleSound.volume = 0.1;
    battleSound.play();
    start.style.display = "none";
    feed.style.display = "block";
    water.style.display = "block";
    play.style.display = "block";
    button4.style.display = "block";
    button4.textContent = "Practice swimming";
    button4.style.fontSize = "30px"; 
  })
})
bulbasaurImage.addEventListener("click", () => {
  bulbSound.volume = 0.3;
  bulbSound.play();
  title.textContent = "You chose Bulbasaur!";
  subtitle.textContent = "Don't let them wither!";
  bulbasaurImage.disabled = true;
  squirtleImage.style.display = "none";
  charmanderImage.style.display = "none";
  progress1.value = bulbChoice.hunger;
  progress2.value = bulbChoice.boredom;
  progress3.value = bulbChoice.thirst;
  progress4.value = bulbChoice.sun; 
  progress.style.display = "flex";
  labels.style.display = "flex";
  specialLabel.textContent = "Plant power";
  start.style.display = "block";
  start.addEventListener("click", () => {
    move();
    battleSound.volume = 0.1;
    battleSound.play();
    start.style.display = "none";
    feed.style.display = "block";
    water.style.display = "block";
    play.style.display = "block";
    button4.style.display = "block";
    button4.textContent = "Soak some rays";
    button4.style.fontSize = "30px"; 
  })
})

function move() {
  let a = setInterval(function() {
    progress1.value = progress1.value - 0.07;
    progress2.value = progress2.value - 0.09;
    progress3.value = progress3.value - 0.08;
    progress4.value = progress4.value - 0.09;
    
    if (progress1.value == 0) {
      confLose();
      clearInterval(a);
    } else if (progress2.value == 0) {
      confLose();
      clearInterval(a);
    } else if (progress3.value == 0) {
      confLose();   
      clearInterval(a);
    } else if (progress4.value == 0) {
      confLose();   
      clearInterval(a); 
    } else if (progress5.value == 100) {
      confWin();
      clearInterval(a);
    }
  }, 25);
}
function confLose() {
    feed.style.display = "none";
    water.style.display = "none";
    play.style.display = "none";
    button4.style.display = "none";
    start.style.display = "none";
    playAgain.style.display = "block";
    title.textContent = "You lose! Try again!";
    subtitle.textContent = " ";
}
function confWin() {
  feed.style.display = "none";
    water.style.display = "none";
    play.style.display = "none";
    button4.style.display = "none";
    start.style.display = "none";
    playAgain.style.display = "block";
    title.textContent = "Your pokémon has levelled up! You win!";
    subtitle.textContent = "How about another round?!";
}
function incrFeed() {
  progress1.value += 10;
  progress2.value -= 2;
  progress3.value -= 2;
  progress4.value -= 2;
  progress5.value += 10;

}
function incrFun() {
  progress2.value += 10;
  progress1.value -= 2;
  progress3.value -= 2;
  progress4.value -= 2;
  progress5.value += 10;
}
function incrWater() {
  progress3.value += 10;
  progress2.value -= 2;
  progress1.value -= 2;
  progress4.value -= 2;
  progress5.value += 10;
}
function incr4() {
  progress4.value += 10;
  progress3.value -= 2;
  progress2.value -= 2;
  progress1.value -= 2;
  progress5.value += 10;
}

playAgain.addEventListener("click", () => {
  window.location.reload();
});
