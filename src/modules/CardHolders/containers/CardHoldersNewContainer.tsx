import React from 'react'
import firebase from 'firebaseConfig';
import CardHoldersForm from '../components/CardHoldersForm';
import {CardHolder} from './CardHoldersContainer'

import {ToastContext} from 'App';

export default function CardHoldersNewContainer(props: any) {
    const {showToast} = React.useContext(ToastContext);

    const submitData = async (values: CardHolder) => {
        console.log('data', values);
        const newValue = {
            name: values.name,
            card_number: values.card_number
        }
        try{
            const db = firebase.firestore();
            await db.collection('card_holders').add(newValue);
            props.history.push('/cardholders');
            showToast("New Card Holder Added");
        }
        catch(error) {
            console.log('error', error);
        }
    }

    return (
        <CardHoldersForm submit={submitData} title={"New Card Holder"} />
    )
}
