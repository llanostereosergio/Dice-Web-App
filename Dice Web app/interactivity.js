let randomNumber = Math.floor(Math.random()*6);

if(randomNumber==6){
  document.querySelector("img1").setHTML("images/dice6.png");
} else if (randomNumber==5) {
  document.querySelector("img1").setHTML("images/dice5.png");
} else if (randomNumber==4) {
  document.querySelector("img1").setHTML("images/dice4.png");
} else if(randomNumber==3){
  document.querySelector("img1").setHTML("images/dice3.png");
} else if (randomNumber==2) {
  document.querySelector("img1").setHTML("images/dice2.png");
} else if(randomNumber=<1){
  document.querySelector("img1").setHTML("images/dice1.png");
}
