{
  'use strict';
  
  const CHARACTER_SIZE = 64;

  FourCharacterPhrasePuzzle.FourCharacterPhrase = class {
    constructor(fcp) {
      this.text = fcp;
    }
    indexOf(i) {
      return this.text[i]
    }
    get length() {
      return this.text.length;
    }
  }

  FourCharacterPhrasePuzzle.draw = function(context, fcp, x, y) {
    context.font = CHARACTER_SIZE + 'px serif';
    for (let i = 0; i < fcp.length; ++i) {
      context.fillText(fcp.indexOf(i), x, y + (CHARACTER_SIZE * i));
    }
  };
}
