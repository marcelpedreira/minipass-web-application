import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from 'common/utils/AuthContext/AuthContext'

export default function PrivateRoute ({ component: Component, roles, ...rest }: any) {
    const {getUser, isSignOut} = React.useContext(AuthContext);
    const currentUser = getUser();

    return(
    <Route {...rest} render={props => {
        
        
        console.log('signout', isSignOut()) 
        if (isSignOut()) {
            // not logged in so redirect to login page with the return url
            // return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            props.history.push('/signin');
        }

        // // check if route is restricted by role
        // if (roles && roles.indexOf(currentUser.role) === -1) {
        //     // role not authorised so redirect to home page
        //     return <Redirect to={{ pathname: '/'}} />
        // }

        // authorised so return component
        return <Component {...props} />
    }} />
)
}