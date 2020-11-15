{
  'use strict';
  
  /**
   * 文字表示フィールド
   */
  FourCharacterPhrasePuzzle.CharacterField = class {
    constructor(fcp) {
      this.fcp = fcp;
    }
    indexOf(i) {
      return this.text[i]
    }
    get length() {
      return this.text.length;
    }
  }
}
