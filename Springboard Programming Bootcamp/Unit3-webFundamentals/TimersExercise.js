function countdown(number) {
	if (number > 0) {
        console.log(number)
		setTimeout(function() {countdown(number-1)},1000);
	} else {
		console.log("DONE!")
	}
}

function randomGame() {
	let tries = 0;

	while (true) {
		if (Math.random()<.75) {
			tries = tries++
			console.log("Less than")
		} else {
			console.log(tries);
			break;
		}
	}

}