import React from 'react';
import Connection from 'common/utils/mqttHook/Connection';
import './App.css';
import CardHoldersContainer from 'modules/CardHolders/containers/CardHoldersContainer';
import UsersContainer from 'modules/Users/containers/UsersContainer';
import CardHoldersNewContainer from 'modules/CardHolders/containers/CardHoldersNewContainer';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AppBar from 'common/components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import firebase from 'firebaseConfig';
import SignInContainer from 'modules/SignIn/containers/SignInContainer'

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

export interface AuthCredential {
  email: string;
  password: string;
};

export const AuthContext = React.createContext({
  signIn: (data: AuthCredential) => {},
  signOut: () => {},
  signUp: (data: any) => {},
});

function App() {
  const classes = useStyles();

  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: AuthCredential) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        try{
          const user = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
          console.log('user', user);
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        }
        catch(error) {
          console.log('error', error);
          // var errorCode = error.code;
          // var errorMessage = error.message;
        }
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
  
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  const [open, setOpen] = React.useState(false);

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
      <AuthContext.Provider value={authContext}>
      <ToastContext.Provider value={{showToast}}>
      <Container maxWidth="md" className={classes.root}>
      {/* <Connection /> */}
      <BrowserRouter>
      <Switch>
        <Route
          path='/login'
          exact={true}
          component={SignInContainer}
        />
        <Route
          path='/cardholders'
          exact={true}
          component={CardHoldersContainer}
        />
        <Route
          path='/cardholders/new'
          component={CardHoldersNewContainer}
        />
        <Route
          path='/users'
          exact={true}
          component={UsersContainer}
        />
        {/* <Route
          path='/users/new'
          component={UsersNewContainer}
        /> */}
      </Switch>
      </BrowserRouter>
      </Container>
      </ToastContext.Provider>
      </AuthContext.Provider>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
