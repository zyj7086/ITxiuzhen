var startbtn = document.getElementById('start');
var endbtn   = document.getElementById('end');

//get box element

var box = document.getElementsByClassName('box');//array

//get a random number from 1 to 255; Math.floor(Math.random()*256)
//

function get3RandomColor(){
	var i =0;
	//get a random color , the format is "rbg(255, 255, 255)"
	while(i<3){
	var randomNumber = Math.floor(Math.random()*9);//get a random number from 0 to 8;
	var randomColor = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
	box[randomNumber].style.backgroundColor = randomColor;
	i++;
	}
}
startbtn.addEventListener('click',function(){
	start_bling = setInterval(get3RandomColor,500);
});
endbtn.addEventListener('click',reset);


var defaultColor = "#fea600";
function reset(){
	clearInterval(start_bling);
	for (var i = 0; i<box.length;i++) {
		box[i].style.backgroundColor = defaultColor;
	}
}

