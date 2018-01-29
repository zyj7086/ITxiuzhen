var result = JSON.parse(sessionStorage.getItem("playlist"));
// ID to show


var check = document.getElementById('check');
var secret = document.getElementById('secret');

var showId = document.getElementById('showId');
var passToNext = document.getElementById('passToNext');

var toJudge = document.getElementById('toJudge');
//Dom
var identity = document.getElementById("role");
var idNumber = document.getElementById('num');


//初始值
var int = 0;
var identityOnPage = result[int]["identity"];

//初始数字



function showIdentity(){

	check.style.display = "none";
	secret.style.display ="block";
	showId.style.display ="none";
	passToNext.style.display ="block";
	
	identity.textContent = "角色："+identityOnPage;
	if(int<result.length-1){
		passToNext.textContent = "隐藏并传递给"+(int+2)+"号";
		
	}else{
		showId.style.display = "none";
		passToNext.style.display ="none";
		toJudge.style.display ="block";
	}
	
}

function passToNextPlayer(){
	check.style.display = "block";
	secret.style.display ="none";
	showId.style.display ="block";
	passToNext.style.display ="none";

	int++;
	identityOnPage = result[int]["identity"];
	idNumber.textContent =int+1;
	showId.textContent ="查看"+(int+1)+"号身份";;
	
}

toJudge.addEventListener('click',function(){
	location.href = "vote.html";
})