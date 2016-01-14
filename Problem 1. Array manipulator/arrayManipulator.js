var input = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
manipulateArray(input);

function manipulateArray(array){

var numberArray = [];

for(var eachItem in array){
	var number = parseFloat(array[eachItem]);
	if (!isNaN(number)){
		numberArray.push(number);
	}

}



console.log("Min number: " + minValue(numberArray));
console.log("Max number: " + maxValue(numberArray));
console.log("Most frequent number: " + mostFrequent(numberArray));
console.log(numberArray.sort(function(a, b){return b-a}));

}



function mostFrequent(array){
	var frequencyCounter = [];

	for(var eachItem in array){
		if (frequencyCounter.indexOf(array[eachItem] < 0)) {
			frequencyCounter[array[eachItem]] = 1;
	}else{
		frequencyCounter[array[eachItem]] = frequencyCounter[array[eachItem]]+1;
	}

	var highestFrequency;
	var highestFrequencyValue = 0;

	for(var eachItem in frequencyCounter){
		if (frequencyCounter[eachItem] > highestFrequencyValue) { highestFrequency = eachItem};
	}
	return highestFrequency;
}





}



function minValue(array){
	var lowest = Number.MAX_VALUE;
	for (var eachItem in array){
		if (array[eachItem] < lowest) { lowest = array[eachItem]};
	}
	return lowest;
}

function maxValue(array){
		;
	var highest = Number.MIN_VALUE;
	for(var eachItem in array){
		if (array[eachItem] > highest) { highest = array[eachItem]};
	}
	return highest;
}
