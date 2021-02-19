import './App.css';
import ChampionList from './Component/ChampionList'
import Auth from './AuthPage/Auth'
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
        <div className="App">
          <Route path="/auth" component={Auth} />
        </div>
        <Route path="/loggedin" component={ChampionList} />
      </Router>
    </div>
    
  );
}

export default App;
