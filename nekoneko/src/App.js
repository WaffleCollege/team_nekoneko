import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from "./Home"
import Quiz from "./quiz"; // Quizページのコンポーネントをインポート
import Input from "./input"; // Inputページのコンポーネントをインポート

function App() {
  return (
    <Router>
    <div className="App">
         
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/" exact component={Home} />
        <Route path="/quiz" exact component={Quiz} />
        <Route path="/input" exact component={Input} />
   
          
      </Switch>

    </div>
    </Router>
  );
}

function Dashboard() {
  return (
    <div class = "select_button">
        <h1>スペイン語活用練習</h1>
        <NavLink to="/quiz" className="nav-link" activeClassName="active-link">
        クイズ
        </NavLink>
        <NavLink to="/input" className="nav-link" activeClassName="active-link">
        練習する
        </NavLink>
    </div>

  );
}

export default App;
