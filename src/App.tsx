import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import SignInContainer from 'modules/SignIn/containers/SignInContainer'
import theme1 from "themes/theme1";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from 'common/components/Dashboard/Dashboard'
import AuthContextProvider from 'common/utils/AuthContext/AuthContext'
import MqttContextProvider from 'common/utils/MqttContext/MqttContext'
import ToastContextProvider from 'common/utils/ToastContext/ToastContext'
import PrivateRoute from 'common/components/PrivateRoute/PrivateRoute'

const useStyles = makeStyles({
  root: {
    marginTop: '5rem'
  },
});



function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AuthContextProvider>
      <MqttContextProvider>
        <ToastContextProvider>
          <MuiThemeProvider theme={theme1}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/signin" component={SignInContainer} />
                <Route path="/dashboard" component={Dashboard} />
                {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
                <Redirect from="/" to="/dashboard/cardholders" />
              </Switch>
            </BrowserRouter>
          </MuiThemeProvider>
        </ToastContextProvider>
      </MqttContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
