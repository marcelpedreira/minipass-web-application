import React from 'react'
import SignInForm from '../components/SignInForm';
import {AuthCredential, AuthContext} from 'common/utils/AuthContext/AuthContext'

export default function SignInContainer(props: any) {
    const {signIn, isSignOut} = React.useContext(AuthContext);

    const submitData = async (values: AuthCredential) => {
        await signIn(values);
        console.log('signout', isSignOut());
        props.history.push('/');
    }

    return (
        <SignInForm submitData={submitData} title={"Login"} />
    )
}
