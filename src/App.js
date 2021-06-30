import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Pages/Create';
import Home from './components/Pages/Home';
import Update from './components/Pages/Update';
import UserDetails from './components/Pages/UserDetails';
import UserInfo from './components/Pages/UserInfo';
import View from './components/Pages/View';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post/view/:id">
            <View />
          </Route>
          <Route exact path="/post/update/:id">
            <Update />
          </Route>
          <Route exact path="/post/create">
            <Create />
          </Route>
          <Route exact path="/userDetails">
            <UserDetails/>
          </Route>
          <Route exact path="/userinfo/:id">
            <UserInfo/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
