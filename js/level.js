{
  'use strict';

  const FCPP = FourCharacterPhrasePuzzle;

  FCPP.Level = {};

  let level = 0;
  let levelTable = [3, 4, 5, 6, 7, 8, 9, 10]
  let characterField = new FCPP.CharacterField(levelTable[level], 100, 30);

  /**
   * レベル管理を初期化
   */
  FCPP.Level.initialize = () => {
  };

  /**
   * 
   * @param {*} context 
   */
  FCPP.Level.update = (context) => {
    const canvasWidth = 1280, canvasHeight = 720;
    let timer = setInterval(() => {
      //clearInterval(timer);
      //context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      characterField.draw(context);
      if (characterField.isCorrectAll()) {
        if (++level >= levelTable.length)
          level = 0;
        characterField = new FCPP.CharacterField(levelTable[level], 100, 30);
      }
    }, 32);
  };

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   */
  FCPP.Level.onMouseDown = (x, y) => {
    characterField.onMouseDown(x, y)
  }

  /**
   * 
   * @param {*} x 
   * @param {*} y 
   */
  FCPP.Level.onMouseUp = (x, y) => {
    characterField.onMouseUp(x, y)
  }

  /**
   * 
   */
  FCPP.Level.onMouseMove = (x, y) => {
    characterField.onMouseMove(x, y)
  }
}
