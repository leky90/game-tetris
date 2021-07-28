import "./App.css";
import GridBoard from "./Components/GridBoard";
import useGameActions from "./hooks/useGameActions";

function App() {
  const { startGame, resetGame } = useGameActions();
  return (
    <div className="app">
      {/* <div className="sidebar"></div> */}
      <div className="content">
        <GridBoard />
      </div>
      <div className="sidebar">
        <button onClick={startGame}>Start game</button>
        <button onClick={resetGame}>Reset game</button>
      </div>
    </div>
  );
}

export default App;
