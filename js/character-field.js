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
    constructor(col, x, y) {
      this.col = col;
      this.offsetX = x;
      this.offsetY = y;
      this.mouseMove = null;

      this.fcps = [];
      for (let c = 0; c < this.col; ++c) {
        this.fcps.push(new FourCharacterPhrasePuzzle.FourCharacterPhrase(FourCharacterPhrasePuzzle.getRandomFCP()))
      }
    }
    draw(context) {

      let defaultFont = context.font;
      let defaultFillStyle = context.fillStyle;
      let defaultStrokeStyle = context.strokeStyle ;

      context.font = CHARACTER_SIZE + 'px serif';
      for (let c = 0; c < this.col; ++c) {
        let fcp = this.fcps[c];
        let characterColors = []
        for (let i = 0; i < fcp.length; ++i) {
          let x = this.offsetX + (c * FIELD_SIZE) - FIELD_SIZE_HALF + CHARACTER_SIZE_HALF;
          let y = this.offsetY + (FIELD_SIZE * i) - FIELD_SIZE_HALF + CHARACTER_SIZE_HALF + FIELD_SIZE_HALF / 2;
          let onMouse = this.mouseMove == null ? false :
            (x < this.mouseMove.clientX && x + FIELD_SIZE > this.mouseMove.clientX && y < this.mouseMove.clientY && y + FIELD_SIZE > this.mouseMove.clientY);
          context.strokeStyle = onMouse ? 'rgb(0, 0, 255)' : defaultStrokeStyle;
          characterColors.push(context.strokeStyle);
          context.strokeRect(x, y, FIELD_SIZE, FIELD_SIZE);
        }
        for (let i = 0; i < fcp.length; ++i) {
          context.fillStyle = characterColors[i];
          context.fillText(fcp.indexOf(i), this.offsetX + c * FIELD_SIZE, this.offsetY + (FIELD_SIZE * i) + FIELD_SIZE);
        }
      }

      context.strokeStyle = defaultStrokeStyle;
      context.fillStyle = defaultFillStyle;
      context.font = defaultFont;
    }
    onMouseMove(event) {
      this.mouseMove = event;
    }
    get length() {
      return this.text.length;
    }
  }
}
