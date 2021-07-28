export interface TetrisPoint {
  rowIndex: number;
  colIndex: number;
  highestRowIndex: number;
  lowestColIndex: number;
  highestColIndex: number;
  shape: TetrisShape;
  type: number;
}

export interface TetrisRotatePoint {
  rowIndex: number;
  colIndex: number;
}

export interface Tetris {
  points: TetrisPoint[];
  shape: TetrisShape;
  type: number;
  highestRowIndex: number;
  lowestColIndex: number;
  highestColIndex: number;
}

export enum ArrowKeys {
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
}

export enum TetrisShape {
  LONG = "LONG",
  DOT = "DOT",
  //   L = "L",
  //   T = "T",
  //   SQUARE = "SQUARE",
}

export enum GameState {
  GAME = "GAME",
}

export enum GameStatus {
  RUNNING = "RUNNING",
  PENDING = "PENDING",
  ENDED = "ENDED",
}

export interface GameAtomState {
  speed: number;
  matrix: number[][];
  status: GameStatus;
  tetris: TetrisPoint[];
}

export const BASE_SPEED = 500;
export const MAX_ROW = 16;
export const MAX_COL = 10;
export const COLUMNS = new Array(MAX_COL).fill(0);
export const MATRIX_TETRIS: number[][] = new Array(MAX_ROW)
  .fill(0)
  .map((row) => [...COLUMNS]);

export const tetrisShapes: Record<TetrisShape, TetrisPoint[]> = {
  [TetrisShape.DOT]: [
    {
      rowIndex: -1,
      colIndex: 0,
      highestRowIndex: 0,
      lowestColIndex: 0,
      highestColIndex: 0,
      shape: TetrisShape.DOT,
      type: 0,
    },
  ],
  [TetrisShape.LONG]: [
    {
      rowIndex: -1,
      colIndex: 0,
      highestRowIndex: -1,
      lowestColIndex: 0,
      highestColIndex: 0,
      shape: TetrisShape.LONG,
      type: 0,
    },
    {
      rowIndex: -2,
      colIndex: 0,
      highestRowIndex: -1,
      lowestColIndex: 0,
      highestColIndex: 0,
      shape: TetrisShape.LONG,
      type: 0,
    },
    {
      rowIndex: -3,
      colIndex: 0,
      highestRowIndex: -1,
      lowestColIndex: 0,
      highestColIndex: 0,
      shape: TetrisShape.LONG,
      type: 0,
    },
    {
      rowIndex: -4,
      colIndex: 0,
      highestRowIndex: -1,
      lowestColIndex: 0,
      highestColIndex: 0,
      shape: TetrisShape.LONG,
      type: 0,
    },
  ],
};

export const rotateShapes: Record<TetrisShape, TetrisRotatePoint[][]> = {
  [TetrisShape.DOT]: [
    [
      {
        rowIndex: 0,
        colIndex: 0,
      },
    ],
    [
      {
        rowIndex: 0,
        colIndex: 0,
      },
    ],
  ],
  [TetrisShape.LONG]: [
    [
      {
        rowIndex: -1,
        colIndex: 0,
      },
      {
        rowIndex: -2,
        colIndex: 0,
      },
      {
        rowIndex: -3,
        colIndex: 0,
      },
      {
        rowIndex: -4,
        colIndex: 0,
      },
    ],
    [
      {
        rowIndex: 0,
        colIndex: -2,
      },
      {
        rowIndex: 0,
        colIndex: -1,
      },
      {
        rowIndex: 0,
        colIndex: 0,
      },
      {
        rowIndex: 0,
        colIndex: 1,
      },
    ],
  ],
};
