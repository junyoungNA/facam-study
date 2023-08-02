import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="game">
      <div className='game-board'>
        <Board/>
      </div>
      <div className='game-info'>
        game-board
      </div>
    </div>
  );
}

export default App;
