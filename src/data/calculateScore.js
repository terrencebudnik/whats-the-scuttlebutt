const calculateScore = (originalSentence, userInput) => {
    const originalWords = originalSentence.split(' ');
    const inputWords = userInput.split(' ');
  
    let points = 0;
    inputWords.forEach((word, index) => {
      if (word === originalWords[index]) {
        points += 1;
      }
    });
  
    return points;
  };
  
  export default calculateScore;
  