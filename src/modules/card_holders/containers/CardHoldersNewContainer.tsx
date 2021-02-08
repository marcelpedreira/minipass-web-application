import { S_IFCHR } from "constants";

import React from 'react'
import { Formik, Field, Form } from "formik";
import firebase from 'firebaseConfig'

interface CardHolder {
    name: string;
    card_number: string;
};

export default function CardHoldersNewContainer(props: any) {
    const submitData = async (values: CardHolder) => {
        // dispatch({type: 'loading'});
        try{
            const db = firebase.firestore();
            await db.collection('card_holders').add(values);
            props.history.push('/cardholders');
        }
        catch(error) {
            console.log('error', error);
        }
        // dispatch({type: 'fetched', payload});
    }

    return (
        <div>
            <h1>New Card Holder</h1>
            <Formik
                initialValues={{ name: "", card_number: "" }}
                onSubmit={submitData}
            >
                <Form>
                    <Field name="name" type="text" />
                    <Field name="card_number" type="text" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
