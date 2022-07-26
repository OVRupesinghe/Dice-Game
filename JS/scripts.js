var turn = 1;
document.getElementById('winner1').style.display = "none";
document.getElementById('winner2').style.display = "none";
function EnterNames() {
  var player_1 = prompt("PLayer1 please enter your name", "Player 1");
  var player_2 = prompt("Player2 please enter your name", "Player 2");
  document.getElementById("plyr-1").value = player_1;
  document.getElementById("plyr-2").value = player_2;

}

function RandNum() {
  var n = Math.random();
  n = n * 6;
  n = Math.floor(n) + 1;
  return n;
}

function changeImages() {
  var randNum1 = RandNum();
  var randNum2 = RandNum();

  switch (randNum1) {
    case 1:
      document.getElementById('Image-1').src = "Images/dice_1.png";
      break;
    case 2:
      document.getElementById('Image-1').src = "Images/dice_2.png";
      break;
    case 3:
      document.getElementById('Image-1').src = "Images/dice_3.png";
      break;
    case 4:
      document.getElementById('Image-1').src = "Images/dice_4.png";
      break;
    case 5:
      document.getElementById('Image-1').src = "Images/dice_5.png";
      break;
    case 6:
      document.getElementById('Image-1').src = "Images/dice_6.png";
      break;

  }
  switch (randNum2) {
    case 1:
      document.getElementById('Image-2').src = "Images/dice_1.png";
      break;
    case 2:
      document.getElementById('Image-2').src = "Images/dice_2.png";
      break;
    case 3:
      document.getElementById('Image-2').src = "Images/dice_3.png";
      break;
    case 4:
      document.getElementById('Image-2').src = "Images/dice_4.png";
      break;
    case 5:
      document.getElementById('Image-2').src = "Images/dice_5.png";
      break;
    case 6:
      document.getElementById('Image-2').src = "Images/dice_6.png";
      break;

  }
}


function game() {
  changeImages();
  var is_one1 = false;
  var is_one2 = false;
  var x = document.getElementById('score-1').value;
  var y = document.getElementById('score-2').value;
  var score_1 = Number(x);
  var score_2 = Number(y);
  var a = document.getElementById('Image-1').src;
  var b = document.getElementById('Image-2').src;
  var image_address1 = a.substr(a.length-10); //because this will return different src in different computers
  var image_address2 = b.substr(b.length-10);
  if (turn == 1) {
    switch (image_address1) {
      case "dice_1.png":
        score_1 += 1;
        is_one1 = true;
        break;
      case "dice_2.png":
        score_1 += 2;
        break;
      case "dice_3.png":
        score_1 += 3;
        break;
      case "dice_4.png":
        score_1 += 4;
        break;
      case "dice_5.png":
        score_1 += 5;
        break;
      case "dice_6.png":
        score_1 += 6;
        break;
    }
    switch (image_address2) {
      case "dice_1.png":
        score_1 += 1;
        is_one2 = true;
        break;
      case "dice_2.png":
        score_1 += 2;
        break;
      case "dice_3.png":
        score_1 += 3;
        break;
      case "dice_4.png":
        score_1 += 4;
        break;
      case "dice_5.png":
        score_1 += 5;
        break;
      case "dice_6.png":
        score_1 += 6;
        break;
    }
    if(is_one1 === true && is_one2 === true){
      score_1 = 0;
      turn = 2;
    }else if(score_1>=100){
      score_1 = 100;
      document.getElementById('btn').style.visibility = 'hidden';
      document.getElementById('winner1').style.display = '';

    }else if(image_address1===image_address2){
      turn = 1;
    }else{
      turn = 2;
    }
    document.getElementById('score-1').value = score_1;

  } else {
    switch (image_address1) {
      case "dice_1.png":
        score_2 += 1;
        is_one1 = true;
        break;
      case "dice_2.png":
        score_2 += 2;
        break;
      case "dice_3.png":
        score_2 += 3;
        break;
      case "dice_4.png":
        score_2 += 4;
        break;
      case "dice_5.png":
        score_2 += 5;
        break;
      case "dice_6.png":
        score_2 += 6;
        break;
    }
    switch (image_address2) {
      case "dice_1.png":
        score_2 += 1;
        is_one2 = true;
        break;
      case "dice_2.png":
        score_2 += 2;
        break;
      case "dice_3.png":
        score_2 += 3;
        break;
      case "dice_4.png":
        score_2 += 4;
        break;
      case "dice_5.png":
        score_2 += 5;
        break;
      case "dice_6.png":
        score_2 += 6;
        break;
    }
    if(is_one1 === true && is_one2 === true){
      score_2 = 0;
      turn = 1;
    }else if(score_2>=100){
      score_2 = 100;
      document.getElementById('btn').style.visibility = 'hidden';
      document.getElementById('winner2').style.display = '';
    }else if(image_address1===image_address2){
      turn = 2;
    }else{
      turn = 1;
    }
    document.getElementById('score-2').value = score_2;
  }
}

function checkcondition(){



}
