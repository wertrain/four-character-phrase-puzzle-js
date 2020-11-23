{
  'use strict';

  FourCharacterPhrasePuzzle.Util = {};

  FourCharacterPhrasePuzzle.Util.getArray = (length) => {
    let array = [];
    for (let index = 0; index < length; ++index) {
      array.push(index);
    }
    return array;
  };
  FourCharacterPhrasePuzzle.Util.shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--){
      let rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
  };

  FourCharacterPhrasePuzzle.Util.getShuffledArray = (length) => {
    let array = FourCharacterPhrasePuzzle.Util.getArray(length);
    return FourCharacterPhrasePuzzle.Util.shuffleArray(array);
  };
}
