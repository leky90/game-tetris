import {
  ArrowKeys,
  MAX_COL,
  MAX_ROW,
  rotateShapes,
  TetrisPoint,
  TetrisShape,
  tetrisShapes,
} from "../types/game";

export function moveTetrisByArrowKeyboard(
  code: ArrowKeys,
  tetris: TetrisPoint[]
) {
  let newTetris = [...tetris];
  switch (code) {
    case ArrowKeys.ArrowLeft:
      newTetris = moveToLeft(newTetris);
      break;
    case ArrowKeys.ArrowRight:
      newTetris = moveToRight(newTetris);
      break;
    case ArrowKeys.ArrowUp:
      newTetris = rotateTetris(newTetris);
      break;

    default:
      break;
  }

  console.log(newTetris);

  return newTetris;
}

export function moveToLeft(tetris: TetrisPoint[]) {
  return tetris.map((tetris) => {
    return tetris.lowestColIndex === 0
      ? tetris
      : {
          ...tetris,
          colIndex: tetris.colIndex - 1,
          lowestColIndex: tetris.colIndex - 1,
          highestColIndex: tetris.colIndex - 1,
        };
  });
}

export function moveToRight(tetris: TetrisPoint[]) {
  return tetris.map((tetris) => {
    return tetris.lowestColIndex === MAX_COL - 1
      ? tetris
      : {
          ...tetris,
          colIndex: tetris.colIndex + 1,
          lowestColIndex: tetris.colIndex + 1,
          highestColIndex: tetris.colIndex + 1,
        };
  });
}

export function moveDown(tetris: TetrisPoint[]) {
  return tetris.map((tetrisPoint) => {
    return tetrisPoint.highestRowIndex === MAX_ROW - 1
      ? tetrisPoint
      : {
          ...tetrisPoint,
          rowIndex: tetrisPoint.rowIndex + 1,
          highestRowIndex: tetrisPoint.highestRowIndex + 1,
        };
  });
}

export function checkMatrixTetrisTouched(
  tetris: TetrisPoint[],
  matrix: number[][]
) {
  return tetris.find((tetris) => {
    return (
      tetris.highestRowIndex === MAX_ROW - 1 ||
      (tetris.rowIndex >= 0 &&
        matrix[tetris.rowIndex + 1][tetris.colIndex] !== 0)
    );
  });
}

export function rotateTetrisShape(tetris: TetrisPoint[]) {
  nextTetrisRotateShape = rotateShapes[tetris.type];
  return tetris;
}

export function rotateTetris(tetris: TetrisPoint[]) {
  const tetrisShape = rotateTetrisShape();
  return tetrisShape;
}

export function generateNewRandomTetris() {
  return randomTetrisShape();
}

export function randomNumber() {
  return Math.floor(Math.random() * MAX_COL);
}

export function randomTetrisShape() {
  const tetrisShapeKeys = Object.keys(tetrisShapes);
  const randomShapeKeyIndex = Math.floor(
    Math.random() * tetrisShapeKeys.length
  );
  return tetrisShapes[tetrisShapeKeys[randomShapeKeyIndex] as TetrisShape];
}

export function hasFilled(
  currentValue: number,
  rowIndex: number,
  colIndex: number,
  tetris?: TetrisPoint[]
) {
  return (
    (tetris &&
      tetris.findIndex(
        (tetrisItem) =>
          tetrisItem.rowIndex === rowIndex && tetrisItem.colIndex === colIndex
      ) >= 0) ||
    currentValue !== 0
  );
}
