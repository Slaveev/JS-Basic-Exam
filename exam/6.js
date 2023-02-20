function pinCode(input) {
	const first = Number(input[0])
	const second = Number(input[1])
	const third = Number(input[2])

	for (let i = 2; i <= first; i += 2) {
  		for (let j = 2; j <= second; j++) {
    		for (let k = 2; k <= third; k += 2) {
      			if (j === 2 || j === 3 || j === 5 || j === 7) {
        		console.log(i + ' ' + j + ' ' + k);
      			}
    		}
  		}
	}
}