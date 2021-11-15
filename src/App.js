
import Login from './user_pages/Login';
import Home from './user_pages/Home';
import Register from './user_pages/Register';
import Profile from './user_pages/Profile';
import LupaPassword from './user_pages/LupaPassword';

import NotFound from './user_pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />}/>
        <Route exact path="/register" render={() => <Register />}/>
        <Route exact path="/home" render={() => <Home />}/>
        <Route exact path="/profile" render={() => <Profile />}/>
        <Route exact path="/forget" render={() => <LupaPassword />}/>
        <Route exact path="*" render={() => <NotFound />}/>
      </Switch>
    </Router>
  );
}

export default App;
