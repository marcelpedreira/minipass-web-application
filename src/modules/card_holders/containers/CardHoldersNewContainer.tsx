import React from 'react'
import firebase from 'firebaseConfig';
import CardHoldersForm from '../components/CardHoldersForm';
import {ToastContext} from 'App';

interface CardHolder {
    name: string;
    card_number: string;
};

export default function CardHoldersNewContainer(props: any) {
    const {showToast} = React.useContext(ToastContext);

    const submitData = async (values: CardHolder) => {
        // dispatch({type: 'loading'});
        try{
            const db = firebase.firestore();
            await db.collection('card_holders').add(values);
            props.history.push('/cardholders');
            showToast();
        }
        catch(error) {
            console.log('error', error);
        }
        // dispatch({type: 'fetched', payload});
    }

    return (
        <CardHoldersForm submitData={submitData} title={"New Card Holder"} />
    )
}
