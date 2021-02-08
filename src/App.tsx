import React from 'react';
import Connection from 'common/utils/mqttHook/Connection';
import './App.css';
import CardHoldersContainer from 'modules/card_holders/containers/CardHoldersContainer';

function App() {
  return (
    <div className="App">
      <Connection />
      <CardHoldersContainer />
    </div>
  );
}

export default App;
