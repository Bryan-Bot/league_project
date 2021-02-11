import './App.css';
import ChampionList from './components/ChampionList'
import Auth from './AuthPage/Auth'
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <div id="navbar">
        <ul>
          <li><a href="#">Champions</a></li>
          <li></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
    <div className="App">
      
      <Router>
        <Route path="/auth" component={Auth} />
        <Route path="/loggedin" component={ChampionList} />
      </Router>
    </div>
    </div>
  );
}

export default App;
