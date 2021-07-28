import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import gameAtom from "../recoil/atoms/gameAtom";
import { ArrowKeys, GameStatus } from "../types/game";
import useGameActions from "./useGameActions";

export default function useGameEngine() {
  const { checkRuleGame, moveTetris } = useGameActions();
  const { matrix, speed, status, tetris } = useRecoilValue(gameAtom);
  const [fps, setFps] = useState(0);

  const moveTetrisByArrowKeys = useCallback((event) => {
    moveTetris(event.code as ArrowKeys);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;
    if (status === GameStatus.RUNNING) {
      intervalId = setInterval(() => {
        checkRuleGame(matrix, tetris);
      }, speed);
    } else {
      intervalId && clearInterval(intervalId);
    }
    document.addEventListener("keydown", moveTetrisByArrowKeys);
    return () => {
      document.removeEventListener("keydown", moveTetrisByArrowKeys);
      intervalId && clearInterval(intervalId);
    };
  }, [status, speed, matrix, tetris]);

  // set fps for game
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    if (status === GameStatus.RUNNING) {
      timeoutId = setTimeout(() => {
        setFps((prevFps) => (prevFps === 10000 ? 0 : prevFps + 1));
      }, 16.6666666667);
    } else {
      timeoutId && clearTimeout(timeoutId);
    }
    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [fps, status]);

  return {
    matrix,
    tetris,
  };
}
