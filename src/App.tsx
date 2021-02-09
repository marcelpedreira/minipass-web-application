import React from 'react';
import Connection from 'common/utils/mqttHook/Connection';
import './App.css';
import CardHoldersContainer from 'modules/card_holders/containers/CardHoldersContainer';
import CardHoldersNewContainer from 'modules/card_holders/containers/CardHoldersNewContainer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AppBar from 'common/components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

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
  showToast: () => {},
});

function App() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const showToast = () => setOpen(true);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="App">
      <AppBar />
      <ToastContext.Provider value={{showToast}}>
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
      </ToastContext.Provider>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
