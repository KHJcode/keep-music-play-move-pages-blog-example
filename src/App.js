import './App.css';
import { Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Author from './pages/Author';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/author' component={Author} />
    </div>
  );
}

export default App;
