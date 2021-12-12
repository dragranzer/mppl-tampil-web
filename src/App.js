import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Login from './user_pages/Login';
import Home from './user_pages/Home';
import Register from './user_pages/Register';
import Profile from './user_pages/Profile';
import LupaPassword from './user_pages/LupaPassword';
import PermintaanKolaborasi from './user_pages/PermintaanKolaborasi';
import ListWebinar from './user_pages/ListWebinar';
import DetailEvent from './user_pages/DetailEvent';
import EventSaya from './user_pages/EventSaya';

import NotFound from './user_pages/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {store, persistor} from "./store/store";

function App() {
  let isAuth = true
  console.log("pindah halaman guys")
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                <Route exact path="/events/:id" render={() => <DetailEvent />}/>
                <Route exact path="/eventsaya" render={() => <EventSaya />}/>
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
      </PersistGate>
    </Provider>
  );
}

export default App;