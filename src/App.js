import './App.css';
import { Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Author from './pages/Author';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/author' component={Author} />
      <audio src='https://docs.google.com/uc?export=open&id=14JlzHWUE2TqAsN237ft43SOw02xDPori' autoPlay={true}></audio>
    </div>
  );
}


export default App;
