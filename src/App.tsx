import React from 'react';
import Connection from 'common/utils/mqttHook/Connection';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import SignInContainer from 'modules/SignIn/containers/SignInContainer'
import theme1 from "themes/theme1";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from 'common/components/Dashboard/Dashboard'
import AuthContextProvider from 'common/utils/AuthContext/AuthContext'
import PrivateRoute from 'common/components/PrivateRoute/PrivateRoute'

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    marginTop: '5rem'
  },
});

export const ToastContext = React.createContext({
  // open: false,
  // setOpen: (open: boolean) => {},
  showToast: (msg: string) => {},
});

function App() {
  const classes = useStyles();

  

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const showToast = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="App">
      <AuthContextProvider>
        <ToastContext.Provider value={{showToast}}>
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
        </ToastContext.Provider>
      </AuthContextProvider>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
