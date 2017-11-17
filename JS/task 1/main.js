var startbtn = document.getElementById('start');
var endbtn   = document.getElementById('end');

//get box element

var box = document.getElementsByClassName('box');//array
var defaultColor = "#fea600";
//get a random number from 1 to 255; Math.floor(Math.random()*256)
//
//get a random number from 0 to 8;

function getThreeboxs(){
	var threeboxes=[];
	while (threeboxes.length<3){
		var randomNumber = Math.floor(Math.random()*9);
		if(threeboxes.indexOf(randomNumber) === -1){
			threeboxes.push(randomNumber);
		}else {continue ;}
		
	}
	return threeboxes;
}
// background-color is rbg(254, 166, 0)
function get3DiffColors(){
	var threecolors=[];
	getColor: for(i=0; i<3;i++){
		var randomColor = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")";
		if(randomColor !="rgb(254, 166, 0)"){
			if(threecolors.indexOf(randomColor)=== -1){
				threecolors.push(randomColor);
			}else{ continue getColor;}
		}else{ continue getColor;}
		
	}
	return threecolors;
}


function get3RandomColor(){
	var threeboxes=  getThreeboxs();
	var threecolors = get3DiffColors();
	for(i=0;i<threeboxes.length;i++){
			box[threeboxes[i]].style.backgroundColor=threecolors[i];
	}
}


function allSameColor(){
	for (var i = 0; i<box.length;i++) {
		box[i].style.backgroundColor = defaultColor;
	}

}
function bling(){
	allSameColor();
	get3RandomColor();
	
}


startbtn.addEventListener('click',function(){
	
	start_bling = setInterval(bling,1000);

});
endbtn.addEventListener('click',reset);

function reset(){
	clearInterval(start_bling);
	allSameColor();
}

