import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* Atention = quita los componentes
          LoggedIn = cambia los botones en base a si el usuario inicio sesión o no */}
      <Header atention={false} loggedIn={true}/>
    </div>
  );
}

export default App;
