
//平民，杀手的DOM
var commoners = document.getElementById('commoner_num');
var killers = document.getElementById('killer_num');

var btn = document.getElementById('shuffle');// 按键的Dom


//按键事件
btn.addEventListener('click',function(){
	reset();

	var num = document.getElementById('players').value;
	var regx = /1[0-8]|[4-9]/g;
	var vf = regx.test(num);
	var note = document.getElementsByClassName('note')[0];
	if(!vf){
		note.textContent='玩家数量为 4-18,请输入正确数字';
		return;vvvvvvv
	}


	// verify(num);
	allocate();
	var people = init();
// 	console.log(people);
	var shuffled = shuffle(people);
	console.log(shuffled);
	showThem(shuffled);
	
});

// 获取输入值，分配平民杀手
function allocate(){
	var num = document.getElementById('players').value; 
	// 获取输入值

	if(num<6){killers.value = 1;}
	else if(num<9){killers.value = 2;}
	else if(num<12){killers.value = 3;}
	else if(num<16){killers.value = 4;}
	else{killers.value = 5;}
	commoners.value = num - killers.value;
	// 根据不同的数量来分配
}

// 初始游戏
function init(){
	var num = Number(document.getElementById('players').value); 
	// 获取输入值，总人数
	var killers = Number(document.getElementById('killer_num').value);
	//获取杀手人数
	var commoners = Number(document.getElementById('commoner_num').value);
	//获取平民数量
		var people = new Array(num);//创建总数组
		for(var i=0; i<killers;i++){
			people[i] = {
				id : i,
				identity:"killer"
			};
			//添加杀手
		}

		for(var j=0; j< commoners;j++){
			people[killers+j] = {
				id:killers+j,
				identity:"commoner"
			};//剩下的添加为平民
		}
		return people;
		// 返回数组，包含杀手和平民

	}
//显示到页面上
function showThem(p){
	var arr = document.getElementsByClassName('detail'); 
	// 获取页面上的Dom数组，默认值为16个
	var inputs = document.getElementsByClassName('identity');
	// 获取页面上的input空格数量
	for(var i=0; i<p.length;i++){

		if (p[i]['identity'] == 'killer') {
			inputs[i].value = "杀手";
		}
		if (p[i]['identity'] == 'commoner') {
			inputs[i].value = "平民";
		}
		if(inputs[i].value){
			arr[i].style.display="block";
		}
		// 将有identity值的，显示出来
	}

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


function verify(n){
	var regx = /1[0-8]|[4-9]/g;
	var vf = regx.test(n);
	var note = document.getElementsByClassName('note')[0];
	if(!vf){
		note.textContent+=(',请输入正确数字');
		return;
	}
}

function reset(){
	var num = document.getElementById('players').value;
	
	var killers = Number(document.getElementById('killer_num').value);
	//获取杀手人数
	
	var commoners = Number(document.getElementById('commoner_num').value);
	//获取平民数量
	
	var arr = document.getElementsByClassName('detail'); 
	// 获取页面上的Dom数组，默认值为16个

	var inputs = document.getElementsByClassName('identity');
	// 获取页面上的input空格数量

	for(var i = 0; i<inputs.length;i++){
		arr[i].style.display='none';
		inputs[i].value='';
	}

	num = 0;
	killers = 0;
	commoners = 0;
	arr =[];
	inputs = [];
}