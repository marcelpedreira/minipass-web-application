import React from 'react';
import Connection from 'common/utils/mqttHook/Connection';
import './App.css';
import CardHoldersContainer from 'modules/card_holders/containers/CardHoldersContainer';
import CardHoldersNewContainer from 'modules/card_holders/containers/CardHoldersNewContainer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Connection />
      <BrowserRouter>
      <Switch>
        <Route
          path='/cardholders'
          exact={true}
          component={CardHoldersContainer}
        />
        <Route
          path='/cardholders/new'
          component={CardHoldersNewContainer}
        />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
