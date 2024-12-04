import logo from './logo.svg';
import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
