var FourCharacterPhrasePuzzle = {};
{
  'use strict';

  FourCharacterPhrasePuzzle.Common = {};

  FourCharacterPhrasePuzzle.Common.initialize = () => {

  };

  FourCharacterPhrasePuzzle.Common.run = (drawFunc) => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    drawFunc(context);
    return canvas;
  };
}
