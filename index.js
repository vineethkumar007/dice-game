function myFunction(){

  var random1 = Math.floor(Math.random() * 6 + 1);
  var random2 = Math.floor(Math.random() * 6 + 1);

  var object1 = document.querySelector(".dice-1 img");
  var object2 = document.querySelector(".dice-2 img");

  var src1 = "images/dice" + random1 + ".png";
  var src2 = "images/dice" + random2 + ".png";

  object1.setAttribute("src", src1);
  object2.setAttribute("src", src2);

  var result = document.querySelector(".result");
  if(random1 == random2){
    result.innerHTML = "It's a Draw";
  }else if(random1 > random2){
    result.innerHTML = "Player 1 won";
  }else{
    result.innerHTML = "Player 2 won";
  }

  result.style.visibility = "visible";

}
