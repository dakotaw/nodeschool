var input = process.argv;
var sum = 0;
for (var i = 2; i < input.length; i++) {
	var item = Number(input[i]);
	sum += item;
}
console.log(sum);
