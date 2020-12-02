{
  'use strict';

  const FCPP = FourCharacterPhrasePuzzle;

  FCPP.Level = {};

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
    const characterField = new FCPP.CharacterField(10, 100, 30);
    let timer = setInterval(() => {
      //clearInterval(timer);
      //context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      characterField.draw(context);
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
