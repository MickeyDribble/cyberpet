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
const evolveSound = new Audio("sounds/pokemon-evolve.mp3");



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

let evolutions = 0;

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
  specialLabel.textContent = "Fire";
  start.style.display = "block";
  start.addEventListener("click", () => {
      
      let a = setInterval(function() {
        progress1.value = progress1.value - 0.07;
        progress2.value = progress2.value - 0.09;
        progress3.value = progress3.value - 0.08;
        progress4.value = progress4.value - 0.09;
        
        if (progress1.value == 0) {
          battleSound.pause();
          confLose();
          clearInterval(a);
        } else if (progress2.value == 0) {
          battleSound.pause();
          confLose();
          clearInterval(a);
        } else if (progress3.value == 0) {
          battleSound.pause();
          confLose();   
          clearInterval(a);
        } else if (progress4.value == 0) {
          battleSound.pause();
          confLose();   
          clearInterval(a); 
        } else if (progress5.value == 100 && evolutions == 1){
          battleSound.pause();
          evolveSound.play()
          confWin()
          title.textContent = "Wow! Your Charmander has fully evolved, into Charizard!"
          charmanderImage.children[0].src = "images/zard.png"
          clearInterval(a)
          
        } else if (progress5.value == 100) {
          evolveSound.play()
          progress5.value = 0
          evolutions+=1
          console.log(evolutions)
          charmanderImage.children[0].src = "images/005.png"
          ;
          
        }

      }, 25);
    
    battleSound.volume = 0.1;
    battleSound.play();
    start.style.display = "none";
    feed.style.display = "block";
    water.style.display = "block";
    play.style.display = "block";
    button4.style.display = "block";
    button4.textContent = "Fire";
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
  specialLabel.textContent = "Water";
  start.style.display = "block";
  start.addEventListener("click", () => {
    let a = setInterval(function() {
      progress1.value = progress1.value - 0.07;
      progress2.value = progress2.value - 0.09;
      progress3.value = progress3.value - 0.08;
      progress4.value = progress4.value - 0.09;
      
      if (progress1.value == 0) {
        battleSound.pause();
        confLose();
        clearInterval(a);
      } else if (progress2.value == 0) {
        battleSound.pause();
        confLose();
        clearInterval(a);
      } else if (progress3.value == 0) {
        battleSound.pause();
        confLose();   
        clearInterval(a);
      } else if (progress4.value == 0) {
        battleSound.pause();
        confLose();   
        clearInterval(a); 
      } else if (progress5.value == 100 && evolutions == 1){
        battleSound.pause();
        evolveSound.play()
        confWin()
        title.textContent = "Wow! Your Squirtle has fully evolved, into Blastoise!"
        squirtleImage.children[0].src = "images/blastoise.png"
        clearInterval(a)
        
      } else if (progress5.value == 100) {
        evolveSound.play()
        progress5.value = 0
        evolutions+=1
        console.log(evolutions)
        squirtleImage.children[0].src = "images/008.png"
        ;
        
      }

    }, 25);
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
  specialLabel.textContent = "Plant";
  start.style.display = "block";
  start.addEventListener("click", () => {
    let a = setInterval(function() {
      progress1.value = progress1.value - 0.07;
      progress2.value = progress2.value - 0.09;
      progress3.value = progress3.value - 0.08;
      progress4.value = progress4.value - 0.09;
      
      if (progress1.value == 0) {
        battleSound.pause();
        confLose();
        clearInterval(a);
      } else if (progress2.value == 0) {
        battleSound.pause();
        confLose();
        clearInterval(a);
      } else if (progress3.value == 0) {
        battleSound.pause();
        confLose();   
        clearInterval(a);
      } else if (progress4.value == 0) {
        battleSound.pause();
        confLose();   
        clearInterval(a); 
      } else if (progress5.value == 100 && evolutions == 1){
        battleSound.pause();
        evolveSound.play()
        confWin()
        title.textContent = "Wow! Your Bulbasaur has fully evolved, into Venusaur!"
        bulbasaurImage.children[0].src = "images/venus.png"
        clearInterval(a)
        
      } else if (progress5.value == 100) {
        evolveSound.play()
        progress5.value = 0
        evolutions+=1
        console.log(evolutions)
        bulbasaurImage.children[0].src = "images/002.png"
        ;
        
      }

    }, 25);
    
    
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


function confLose() {
    feed.style.display = "none";
    water.style.display = "none";
    play.style.display = "none";
    button4.style.display = "none";
    start.style.display = "none";
    playAgain.style.display = "block";
    progress.style.display = "none";
    labels.style.display = "none"
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
    progress.style.display = "none";
    labels.style.display = "none"
    subtitle.textContent = "Congratulations, you win!";
    
  
}

function move(){
  let a = setInterval(function() {
    progress1.value = progress1.value - 0.07;
    progress2.value = progress2.value - 0.09;
    progress3.value = progress3.value - 0.08;
    progress4.value = progress4.value - 0.09;
    
    if (progress1.value == 0) {
      battleSound.pause();
      confLose();
      clearInterval(a);
    } else if (progress2.value == 0) {
      battleSound.pause();
      confLose();
      clearInterval(a);
    } else if (progress3.value == 0) {
      battleSound.pause();
      confLose();   
      clearInterval(a);
    } else if (progress4.value == 0) {
      battleSound.pause();
      confLose();   
      clearInterval(a); 
    }
  })
}
function incrFeed() {
  if(evolutions === 1) {
    console.log("evolutution is 1")
    progress1.value += 10;
    progress2.value -= 2;
    progress3.value -= 2;
    progress4.value -= 2;
    progress5.value += 2.5;
  } else if(evolutions != 1){
     progress1.value += 10;
     progress2.value -= 2;
     progress3.value -= 2;
     progress4.value -= 2;
     progress5.value += 5
  }

  

}
function incrFun() {
  if(evolutions === 1) {
    progress2.value += 10;
    progress1.value -= 2;
    progress3.value -= 2;
    progress4.value -= 2;
    progress5.value += 2.5;
  }else if(evolutions != 1){
    progress2.value += 10;
    progress1.value -= 2;
    progress3.value -= 2;
    progress4.value -= 2;
    progress5.value += 5;
  }
  
}
function incrWater() {
  if(evolutions === 1) {
    progress3.value += 10;
    progress2.value -= 2;
    progress1.value -= 2;
    progress4.value -= 2;
    progress5.value += 2.5;
  }else if(evolutions != 1){
    progress3.value += 10;
    progress2.value -= 2;
    progress1.value -= 2;
    progress4.value -= 2;
    progress5.value += 5;
  }
  
}
function incr4() {
  if(evolutions === 1) {
    progress4.value += 10;
    progress3.value -= 2;
    progress2.value -= 2;
    progress1.value -= 2;
    progress5.value += 2.5;
  }else if(evolutions != 1){
    progress4.value += 10;
    progress3.value -= 2;
    progress2.value -= 2;
    progress1.value -= 2;
    progress5.value += 5;
  }
  
}

playAgain.addEventListener("click", () => {
  window.location.reload();
});
