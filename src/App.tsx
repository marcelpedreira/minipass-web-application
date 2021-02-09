import React from 'react';
import Connection from 'common/utils/mqttHook/Connection';
import './App.css';
import CardHoldersContainer from 'modules/card_holders/containers/CardHoldersContainer';
import CardHoldersNewContainer from 'modules/card_holders/containers/CardHoldersNewContainer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AppBar from 'common/components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '5rem'
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar />
      <Container maxWidth="md" className={classes.root}>
      {/* <Connection /> */}
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
      </Container>
      
    </div>
  );
}

export default App;
