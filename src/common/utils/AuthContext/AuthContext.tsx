import React from 'react'
import firebase from 'firebaseConfig';

export interface AuthCredential {
  email: string;
  password: string;
};

export interface AuthUser {
  email: string;
  role: string;
};

export interface AuthContext {
  signIn: (data: AuthCredential) => void;
  signOut: () => void;
  signUp: (data: any) => void;
  getUser: () => AuthUser | null;
  isSignOut: () => boolean;
};
  
export const AuthContext = React.createContext<AuthContext>({
  signIn: (data: AuthCredential) => {},
  signOut: () => {},
  signUp: (data: any) => {},
  getUser: () => null,
  isSignOut: () => true,
});

  
export default function AuthContextProvider(props: any) {
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    console.log('effect')
    const bootstrapAsync = async () => {
      
      try {
        const email = await localStorage.getItem('email');
        if(email){
          const users = await firebase.firestore().collection('users').where("email", "==", email).get();
          const user = users.docs.pop()?.data();
          dispatch({ type: 'RESTORE_TOKEN', user });
        }
        

      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      
    };

    bootstrapAsync();
  }, []);

  interface AuthState {
    user: AuthUser;
    isSignout: boolean;
    isLoading: boolean;
  }

  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      let user;
      console.log('llego', action.type)
      switch (action.type) {
        case 'RESTORE_TOKEN':
          user = {...action.user}
          return {
            user,
            isSignout: false,
            isLoading: false,
          };
        case 'SIGN_IN':
          user = {...action.user}
          return {
            isLoading: false,
            isSignout: false,
            user,
          };
        case 'SIGN_OUT':
          return {
            isLoading: false,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: true,
      user: null,
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
          const response = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
          if(response.user&&response.user.email) {
            const email = response.user.email;
            console.log('email', email);
            localStorage.setItem('email', email);
            const users = await firebase.firestore().collection('users').where("email", "==", email).get();
            const user = users.docs.pop()?.data();
            console.log('user', user);
            dispatch({ type: 'SIGN_IN', user });
          }
        }
        catch(error) {
          console.log('error', error);
          // var errorCode = error.code;
          // var errorMessage = error.message;
        }
      },
      signOut: async () => {
        const result = await firebase.auth().signOut();
        console.log('result', result);
        localStorage.removeItem('email');
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
  
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      getUser: () => state ? state.user : null,
      isSignOut: () => state ? state.isSignout : false
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  )
}
