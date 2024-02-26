import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home"

function App() {
  return (
    <Router>
    <div className="App">
      <h1>スペイン語学習を始める</h1>    
      <Switch>
        <Route path="/" exact component={Home} />
          
      </Switch>

    </div>
    </Router>
  );
}

export default App;
