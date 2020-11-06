var FourCharacterPhrasePuzzle = {};
{
  'use strict';

  FourCharacterPhrasePuzzle.Common = {};

  FourCharacterPhrasePuzzle.Common.initialize = function() {

  };

  FourCharacterPhrasePuzzle.Common.run = function(drawFunc) {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    drawFunc(context);
    return canvas;
  };
}
