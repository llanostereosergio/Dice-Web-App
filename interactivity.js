
function myDiceFunction(){

  let randomNumber1 = Math.floor(Math.random()*6) + 1;
  let randomNumber2 = Math.floor(Math.random()*6) + 1;

  document.querySelector("img.die1").setAttribute("src", "Assets/dice"+randomNumber1+".png" );
  document.querySelector("img.die2").setAttribute("src", "Assets/dice"+randomNumber2+".png");

}

myDiceFunction();
