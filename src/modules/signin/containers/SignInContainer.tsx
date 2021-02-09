import React from 'react'
import SignInForm from '../components/SignInForm';
import {AuthCredential, AuthContext} from 'App'

export default function SignInContainer() {
    const {signIn} = React.useContext(AuthContext);

    const submitData = async (values: AuthCredential) => {
        signIn(values);
    }

    return (
        <SignInForm submitData={submitData} title={"Login"} />
    )
}
