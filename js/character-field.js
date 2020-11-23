{
  'use strict';
  
  /** 四字熟語の一文字あたりの描画サイズ */
  const FIELD_SIZE = 100;
  const FIELD_SIZE_HALF = FIELD_SIZE / 2;
  const CHARACTER_SIZE = 80;
  const CHARACTER_SIZE_HALF = CHARACTER_SIZE / 2;
  /** 四字熟語の文字数 */
  const PHRASE_COUNT = 4;
  /** 表示余白 */
  const PADDING_LEFT = 14;
  const PADDING_TOP = 2;
  /**
   * 文字表示フィールド
   */
  FourCharacterPhrasePuzzle.CharacterField = class {
    constructor(col, x, y) {
      this.col = col;
      this.offsetX = x;
      this.offsetY = y;
      this.mouseMove = null;
      this.activeFieldIndex = -1;
      this.lockedTable = []
      this.characterIndices = FourCharacterPhrasePuzzle.Util.getShuffledArray(this.col * PHRASE_COUNT);
      console.log(this.characterIndices)

      this.fcps = [];
      for (let c = 0; c < this.col; ++c) {
        this.fcps.push(new FourCharacterPhrasePuzzle.FourCharacterPhrase(FourCharacterPhrasePuzzle.getRandomFCP()));
        // 一つの四字熟語につき、二つ合っている状態になるようにテーブルを作成する
        FourCharacterPhrasePuzzle.Util.shuffleArray([true, true, false, false]).forEach(
          l => this.lockedTable.push(l)
        );
      }
      // テーブルの状態とロック状態を同期する
      //（true になっているものは正しいインデックスが入っているようにする）
      for (let i = 0; i < this.characterIndices.length; ++i) {
        if (!this.lockedTable[i]) continue;
        for (let j = 0; j < this.characterIndices.length; ++j) {
          if (this.characterIndices[j] == i) {
            this.characterIndices[j] = this.characterIndices[i];
            this.characterIndices[i] = i; 
            break;
          }
        }
      }
    }
    draw(context) {

      const defaultFont = context.font;
      const defaultFillStyle = context.fillStyle;
      const defaultStrokeStyle = context.strokeStyle;
      const defaultLineWidth = context.lineWidth;
      context.font = CHARACTER_SIZE + 'px serif';
      this.forEach((row, col, x, y, count) => {
        let onMouse = (this.mouseMove == null || this.lockedTable[count]) ? false :
          (x < this.mouseMove.clientX && x + FIELD_SIZE > this.mouseMove.clientX && y < this.mouseMove.clientY && y + FIELD_SIZE > this.mouseMove.clientY);
        let color = onMouse ? 'rgb(0, 0, 255)' : 'rgb(0, 0, 0)';
        color = this.activeFieldIndex == count ? 'rgb(255, 128, 0)' : color;
        color = count == this.characterIndices[count] ? 'rgb(255, 0, 0)' : color;
        context.lineWidth = this.lockedTable[count] ? 8 : 1;
        context.strokeStyle = color;
        context.strokeRect(x, y, FIELD_SIZE, FIELD_SIZE);

        let index = this.characterIndices[count];
        let fcp = this.fcps[Math.floor(index / PHRASE_COUNT)];
        context.fillStyle = color;
        context.fillText(fcp.indexOf(index % PHRASE_COUNT), 
          (this.offsetX + row * FIELD_SIZE) + (row * PADDING_LEFT), 
          (this.offsetY + (FIELD_SIZE * col) + FIELD_SIZE)) + (col * PADDING_TOP);
      });
      context.lineWidth = defaultLineWidth;
      context.strokeStyle = defaultStrokeStyle;
      context.fillStyle = defaultFillStyle;
      context.font = defaultFont;
    }
    onMouseDown(mouseX, mouseY) {
    }
    onMouseUp(mouseX, mouseY) {
      this.forEach((row, col, x, y, count) => {
        let onMouse = (this.mouseMove == null || this.lockedTable[count]) ? false :
          (x < mouseX && x + FIELD_SIZE > mouseX && y < mouseY && y + FIELD_SIZE > mouseY);
        if (onMouse) {
          if (this.activeFieldIndex >= 0) {
            let oldIndex = this.activeFieldIndex;
            let temp = this.characterIndices[oldIndex];
            this.characterIndices[oldIndex] = this.characterIndices[count];
            this.characterIndices[count] = temp;
            this.activeFieldIndex = -1;
          } else {
            this.activeFieldIndex = count;
          }
        }
      });
    }
    onMouseMove(mouseX, mouseY) {
      this.mouseMove = {clientX: mouseX, clientY:mouseY};
    }
    forEach(loopFunc) {
      for (let count = 0; count < this.characterIndices.length; ++count) {
        let row = Math.floor(count / PHRASE_COUNT);
        let col = count % PHRASE_COUNT;
        let x = (this.offsetX + (row * FIELD_SIZE) - FIELD_SIZE_HALF + CHARACTER_SIZE_HALF) + (row * PADDING_LEFT);
        let y = (this.offsetY + (FIELD_SIZE * col) - FIELD_SIZE_HALF + CHARACTER_SIZE_HALF + FIELD_SIZE_HALF / 2) + (col * PADDING_TOP);
        loopFunc(row, col, x, y, count);
      }
    }
    get length() {
      return this.text.length;
    }
  }
}
