var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Enter tags: \n",function(answer){	
	
	console.log(replaceATag(answer));	

	rl.close();
});


function replaceATag (str){
	var replacedTag = str.replace("<a","[URL");
	replacedTag = replacedTag.replace("</a>","[/URL]");
	return replacedTag;

}
