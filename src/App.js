import logo from './logo.svg';
import './App.css';
import zhiboma from './ZHIBOMA.png';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu />
      <img src={zhiboma}/>
        <h1>ZHIBO MA</h1>
        <p>
          Welcome to my site.
        </p>
      </header>
    </div>
  );
}

export default App;
