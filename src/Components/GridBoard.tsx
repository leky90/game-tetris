import useGameEngine from "../hooks/useGameEngine";
import { TetrisPoint } from "../types/game";
import { hasFilled } from "../utils/game";
import GridItem from "./GridItem";

const GridBoard = () => {
  const { matrix, tetris } = useGameEngine();

  return (
    <div className="grid-board">
      {matrix.map((columns: number[], rowIndex: number) =>
        columns.map((currentValue: number, colIndex: number) => (
          <GridItem
            key={`${rowIndex}-${colIndex}`}
            value={hasFilled(currentValue, rowIndex, colIndex, tetris)}
          />
        ))
      )}
    </div>
  );
};

export default GridBoard;
