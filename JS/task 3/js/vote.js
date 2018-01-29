// audio
var x = document.getElementById("myAudio"); 
var play = true;
function toggleAudio(){
	if(!play){
		x.play();
		play=true;
	}else{
		x.pause();
		play=false;
	}
}

var board = document.querySelector(".selection");

html="";
var result = JSON.parse(sessionStorage.getItem("playlist"));
for(var i=0;i<result.length;i++){
	board.innerHTML+= '<div class="col-xs-4"><a href="#" class="select"><div class="choice"><div class="name"><div>'+
	result[i]["identity"]+'</div></div><div class="number">'+(i+1)+'号</div><div class="operation"><div><img src="images/kill.png"></div><div><img src="images/magnifier.png"></div><div><img src="images/target.png"></div><div><img src="images/cure.png"></div></div></div></a></div>';
}
