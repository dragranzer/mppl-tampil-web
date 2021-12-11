import Login from './user_pages/Login';
import Home from './user_pages/Home';
import Register from './user_pages/Register';
import Profile from './user_pages/Profile';
import LupaPassword from './user_pages/LupaPassword';
import PermintaanKolaborasi from './user_pages/PermintaanKolaborasi';
import ListWebinar from './user_pages/ListWebinar';

import NotFound from './user_pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let isAuth = true
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Login />}/>
        <Route exact path="/register" render={() => <Register />}/>
        {
          isAuth ?
          <>
          <Switch>
            <Route exact path="/home" render={() => <Home />}/>
            <Route exact path="/profile" render={() => <Profile />}/>
            <Route exact path="/forget" render={() => <LupaPassword />}/>
            <Route exact path="/collab" render={() => <PermintaanKolaborasi />}/>
            <Route exact path="/events" render={() => <ListWebinar />}/>
            <Route exact path="*" render={() => <NotFound />}/>
          </Switch>
          </>
          :
          <>
            <Route exact path="/home" render={() => <Home />}/>
            <Route exact path="*" render={() => <NotFound />}/>
          </>

        }
        <Route exact path="*" render={() => <NotFound />}/>
      </Switch>
    </Router>
  );
}

export default App;