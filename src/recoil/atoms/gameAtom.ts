import { atom } from "recoil";
import {
  BASE_SPEED,
  GameAtomState,
  GameState,
  GameStatus,
  MATRIX_TETRIS,
} from "../../types/game";

const gameAtom = atom<GameAtomState>({
  key: GameState.GAME,
  default: {
    matrix: MATRIX_TETRIS,
    speed: BASE_SPEED,
    status: GameStatus.PENDING,
    tetris: [],
  },
});

export default gameAtom;
