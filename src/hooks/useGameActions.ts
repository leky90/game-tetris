import { KeyboardEvent, KeyboardEventHandler } from "react";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import gameAtom from "../recoil/atoms/gameAtom";
import { ArrowKeys, GameStatus, TetrisPoint } from "../types/game";
import {
  checkMatrixTetrisTouched,
  generateNewRandomTetris,
  moveDown,
  moveTetrisByArrowKeyboard,
} from "../utils/game";

export default function useGameActions() {
  const setGameState = useSetRecoilState(gameAtom);
  const resetGameState = useResetRecoilState(gameAtom);

  const resetGame = () => {
    resetGameState();
  };

  const startGame = () => {
    setGameState((game) => ({
      ...game,
      status: GameStatus.RUNNING,
      tetris: generateNewRandomTetris(),
    }));
  };

  const endGame = () => {
    setGameState((game) => ({ ...game, status: GameStatus.ENDED }));
  };

  const createNewRandomTetris = () => {
    setGameState((game) => ({
      ...game,
      tetris: generateNewRandomTetris(),
    }));
  };

  const moveDownTetris = () => {
    setGameState((game) => ({ ...game, tetris: moveDown(game.tetris) }));
  };

  const moveTetris = (code: ArrowKeys) => {
    setGameState((game) => ({
      ...game,
      tetris: moveTetrisByArrowKeyboard(code, game.tetris),
    }));
  };

  const updateMatrixPoints = (tetris: TetrisPoint[]) => {
    setGameState((game) => {
      const matrix = JSON.parse(JSON.stringify(game.matrix));

      tetris.filter((tetrisPoint) => {
        if (tetrisPoint.rowIndex >= 0) {
          matrix[tetrisPoint.rowIndex][tetrisPoint.colIndex] = 1;
        }
        return false;
      });

      return { ...game, matrix };
    });
  };

  const checkRuleGame = (matrix: number[][], tetris: TetrisPoint[]) => {
    const touched = checkMatrixTetrisTouched(tetris, matrix);

    if (touched) {
      updateMatrixPoints(tetris);

      if (touched.rowIndex > 0) {
        createNewRandomTetris();
      } else {
        endGame();
      }
    }

    moveDownTetris();
  };

  return {
    resetGame,
    startGame,
    endGame,
    checkRuleGame,
    moveTetris,
  };
}
