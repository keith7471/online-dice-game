
var randomnumber_1 = Math.floor(Math.random() * 6) +1; 
var random_image_1= "images/dice" + randomnumber_1 + ".png";
var image_selectr_1= document.querySelectorAll("img")[0];
image_selectr_1.setAttribute("src" ,random_image_1);


var randomnumber_2 = Math.floor(Math.random() * 6) +1;
var random_image_2 = "images/" + "dice" + randomnumber_2 + ".png";
var image_2 = document.querySelectorAll("img")[1];
image_2.setAttribute("src", random_image_2);

if(randomnumber_1 > randomnumber_2)
{
    document.querySelector("div h1").innerHTML="😍 Player 1 Wins";
}

else if(randomnumber_2 > randomnumber_1)
{
    document.querySelector("div h1").innerHTML="🥳 Player 2 Wins";
}
else{
    document.querySelector("div h1").innerHTML="Draw!";
}
