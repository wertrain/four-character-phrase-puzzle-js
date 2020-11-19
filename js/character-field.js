{
  'use strict';
  
  /** 四字熟語の一文字あたりの描画サイズ */
  const FIELD_SIZE = 100;
  const FIELD_SIZE_HALF = FIELD_SIZE / 2;
  const CHARACTER_SIZE = 80;
  const CHARACTER_SIZE_HALF = CHARACTER_SIZE / 2;

  /**
   * 文字表示フィールド
   */
  FourCharacterPhrasePuzzle.CharacterField = class {
    constructor(col) {
      this.col = col;
    }
    draw(context, x, y) {
      context.font = CHARACTER_SIZE + 'px serif';
      for (let c = 0; c < this.col; ++c) {
        let fcp = new FourCharacterPhrasePuzzle.FourCharacterPhrase(FourCharacterPhrasePuzzle.getRandomFCP());
        for (let i = 0; i < fcp.length; ++i) {
          context.strokeRect(
            x + (c * FIELD_SIZE) - FIELD_SIZE_HALF + CHARACTER_SIZE_HALF,
            y + (FIELD_SIZE * i) - FIELD_SIZE_HALF + CHARACTER_SIZE_HALF + FIELD_SIZE_HALF / 2, FIELD_SIZE, FIELD_SIZE);
        }
        for (let i = 0; i < fcp.length; ++i) {
          context.fillText(fcp.indexOf(i), x + c * FIELD_SIZE, y + (FIELD_SIZE * i) + FIELD_SIZE);
        }
      }
    }
    get length() {
      return this.text.length;
    }
  }
}
