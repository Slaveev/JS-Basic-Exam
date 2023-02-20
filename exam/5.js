function findTopScorer(arr) {
    let maxGoals = 0;
    let bestPlayer = '';
    let hatTrick = false;
   
    for (let i = 0; i < arr.length; i += 2) {
      const player = arr[i];
      const goals = parseInt(arr[i + 1]);
   
      if (goals >= 3) {
        hatTrick = true;
      }
   
      if (goals > maxGoals && goals < 10) {
        maxGoals = goals;
        bestPlayer = player;
      }
   
      if (goals >= 10) {
        console.log(`${player} is the best player!\nHe has scored ${goals} goals and made a hat-trick !!!`);
        break;
      }
   
      if (arr[i + 2] === 'END' && maxGoals > 0) {
        if (hatTrick) {
          console.log(`${bestPlayer} is the best player!\nHe has scored ${maxGoals} goals and made a hat-trick !!!`);
        } else {
          console.log(`${bestPlayer} is the best player!\nHe has scored ${maxGoals} goals.`);
        }
        break;
      }
    }
  }