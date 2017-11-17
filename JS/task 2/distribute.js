var commoners = document.getElementById('commoner_num');
var killers = document.getElementById('killer_num');





var btn = document.getElementById('shuffle');

btn.addEventListener('click',function(){
	var num = document.getElementById('players').value;

	allocate();
	var people = init();
	console.log(people);
	var shuffled = shuffle(people);
console.log(shuffled);
});

function allocate(){
	var num = document.getElementById('players').value;

	if(num<6){killers.value = 1;}
	else if(num<9){killers.value = 2;}
	else if(num<12){killers.value = 3;}
	else if(num<16){killers.value = 4;}
	else{killers.value = 5;}
	commoners.value = num - killers.value;

}

function init(){
	var num = Number(document.getElementById('players').value);
	var killers = Number(document.getElementById('killer_num').value);
	var commoners = Number(document.getElementById('commoner_num').value);
		var people = new Array(num);
		for(var i=0; i<killers;i++){
			people[i] = {
				id : i,
				identity:"killer"
			};

		}

		for(var j=0; j< commoners;j++){
			people[killers+j] = {
				id:killers+j,
				identity:"commoner"
			};
		}
		return people;

	}

function showThem(p){
	var arr = document.getElementsByClassName('detail');
	var inputs = document.getElementsByClassName('identity');

	for(var i=0; i<p.length;i++){
		inputs[i].value = p[i]['identity'];
		if(inputs[i].value){
			arr[i].style.display="block";
		}

	}
	console.log(inputs);

}




function shuffle(a) {
  var length = a.length;
  var shuffled = Array(length);

  for (var index = 0, rand; index < length; index++) {
    rand = Math.floor((Math.random() * (index + 1)));
    if (rand !== index) {
      shuffled[index] = shuffled[rand];
    
    shuffled[rand] = a[index];
    }
  }
  return shuffled
}





