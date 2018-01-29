
//平民，杀手的DOM
var commoners,killers;

var btn = document.getElementById('distribute');// 按键的Dom
var toShuffle = document.getElementById('toShuffle');

var details = document.getElementById("details");
var ableToShuffle =false;
 details.innerHTML ="";
// var results = 

//按键事件
btn.addEventListener('click',function(){


	var num = document.getElementById('players').value;
	var regx = /^1[0-8]$|^0?[4-9]$/g;
	var vf = regx.test(num);
	var note = document.getElementsByClassName('note')[0];
	if(!vf){
		alert('请输入正确的玩家数量');
		return;
	}


	var people = allocate();
// 	console.log(people);
	var shuffled = shuffle(people);

// // 按ID 号码排列
	
// 		for(var i=0;i<shuffled.length;i++){
// 		shuffled[i]["id"]= i+1;
// 	}
	console.log(shuffled);
	//存储到本地数据
	sessionStorage.setItem("playlist",JSON.stringify(shuffled));

});
toShuffle.addEventListener('click',function(){
	if(!ableToShuffle){
		alert("请输入人数，点击设置，再发牌");
	}else{
		location.href = "check.html";
	}
})

// 获取输入值，分配平民杀手
function allocate(){
	var num = document.getElementById('players').value; 
	// 获取输入值

	if(num<6){killers = 1;}
	else if(num<9){killers = 2;}
	else if(num<12){killers = 3;}
	else if(num<16){killers= 4;}
	else{killers = 5;}
	commoners = num - killers;
	// 根据不同的数量来分配
	details.innerHTML ='<div class="unit"><span class="symbol1"></span><p>杀&nbsp;手&nbsp;'+
		killers+'&nbsp;人</p></div><div class="unit"><span class="symbol2"></span> <p>平&nbsp;民&nbsp;'
		+commoners+'&nbsp;人</p></div>';
	ableToShuffle = true;
		var people = new Array(num);//创建总数组
		for(var i=0; i<killers;i++){
			people[i] = {
				// "id" : i+1,
				"identity":"杀手"
			};
			//添加杀手
		}

		for(var j=0; j< commoners;j++){
			people[killers+j] = {
				// "id":killers+j+1,
				"identity":"平民"
			};//剩下的添加为平民
		}

		return people;
		// 返回数组，包含杀手和平民
}





//打乱数组
function shuffle(array) {
  var _array = array.concat();

  for (var i = _array.length; i--; ) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }

  return _array;
}
