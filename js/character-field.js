{
  'use strict';
  
  /** 四字熟語の一文字あたりの描画サイズ */
  const FIELD_SIZE = 64;

  /**
   * 文字表示フィールド
   */
  FourCharacterPhrasePuzzle.CharacterField = class {
    constructor(col) {
      this.col = col;
    }
    draw(context, x, y) {
      for (let c = 0; c < this.col; ++c) {
        for (let i = 0; i < 4; ++i) {
          context.strokeRect(x + c * FIELD_SIZE, y + (FIELD_SIZE * i), FIELD_SIZE, FIELD_SIZE);
        }
      }
    }
    get length() {
      return this.text.length;
    }
  }
}
