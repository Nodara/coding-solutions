
const numDifferentIntegers = (word) => {
  const numbers = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
  }

  // replace all non-digit character with a space      
  for (let w = 0; w < word.length; w++) {
    if (!(word[w] in numbers)) {
      word = word.replace(word[w], ' ');
    }
  }

  const integers = {};
  const integersArray = [];

  let tempWord = " 123  34 8  34";


  // for (let w = 0; w < word.length - 1; w++){ 
  //     for ( let k = 1; k < word.length; k++) {
  //         if
  //     }
  // }


};