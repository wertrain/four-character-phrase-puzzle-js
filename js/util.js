{
  'use strict';

  FourCharacterPhrasePuzzle.Util = {};

  /**
   * 指定された長さ分の連番の数値が入った配列を取得
   * @param {*} length 
   */
  FourCharacterPhrasePuzzle.Util.getArray = (length) => {
    let array = [];
    for (let index = 0; index < length; ++index) {
      array.push(index);
    }
    return array;
  };

  /**
   * 配列をシャッフル
   * @param {*} array 
   */
  FourCharacterPhrasePuzzle.Util.shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--){
      let rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
  };

  /**
   * 指定された長さ分の連番の数値が入ったシャッフルされた状態の配列を取得
   * @param {*} length 
   */
  FourCharacterPhrasePuzzle.Util.getShuffledArray = (length) => {
    let array = FourCharacterPhrasePuzzle.Util.getArray(length);
    return FourCharacterPhrasePuzzle.Util.shuffleArray(array);
  };
}
