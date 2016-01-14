var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Enter array: \n",function(answer){	
	
	console.log(modify(answer));	

	rl.close();
});


function modify(array){
	var input = array.replace("[","");
	input = input.replace("]","");
	var inputArray = input.split(",");
	inputArray = toFloat(inputArray);
	var viableScores = [];
	for(var eachitem in inputArray){
		if (inputArray[eachitem] > 0) {
			if (inputArray[eachitem] < 400) {
				viableScores.push(inputArray[eachitem]);
			}
		}
	}
	for(var eachitem in viableScores){
		viableScores[eachitem] = viableScores[eachitem] * 0.80;
	}
	console.log(viableScores.sort(function(a, b){return a-b}));

}

function toFloat(array){
	var newArray = [];
	for(var eachitem in array){
		newArray.push(parseFloat(array[eachitem]));
	}
	return newArray;
}

