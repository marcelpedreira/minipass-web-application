import React from 'react'
import firebase from 'firebaseConfig';

import LoadingContainer from 'common/components/LoadingContainer'
import CardHoldersForm from '../components/CardHoldersForm';
import {ToastContext} from 'App';
import {CardHolder} from './CardHoldersContainer'

interface CardHolderState {
    isloading: boolean;
    data: CardHolder | null;
    error: Error |  null;
}

export default function CardHoldersEditContainer(props: any) {
    const {showToast} = React.useContext(ToastContext);

    const initialState: CardHolderState = {
        isloading: false,
        data: null,
        error: null
    };

    const [state, dispatch] = React.useReducer((state: CardHolderState, action: any) => {
        switch (action.type) {
            case 'loading':
                return {
                    isloading: true,
                    data: state.data,
                    error: state.error
                };
            case 'fetched':
                return {
                    isloading: false,
                    data: action.payload,
                    error: state.error
                };
            case 'error':
                return {
                    isloading: false,
                    data: state.data,
                    error: action.payload,
                };
            default:
            throw new Error();
        }
    }, initialState);

    React.useEffect(() => {
        console.log('use effect')
        fetchData();
    }, []);

    const fetchData = async () => {
        dispatch({type: 'loading'});
        try {
            console.log('id', props.match.params.id);
            const doc = await firebase.firestore().doc(`card_holders/${props.match.params.id}`).get();
            const payload = {id: doc.ref.id, ...doc.data()};
            dispatch({type: 'fetched', payload});
        }
        catch(error) {
            console.log('error', error)
            dispatch({type: 'error', payload: error});
        }
    }

    const submitData = async (values: CardHolder) => {
        console.log('submitdata', values);
        const newValue = {
            name: values.name,
            card_number: values.card_number
        }
        try{
            const documentRef = firebase.firestore().doc(`card_holders/${values.id}`);
            await documentRef.set(newValue);
            props.history.push('/cardholders');
            showToast("Card Holder Edited");
        }
        catch(error) {
            console.log('error', error);
        }
    }

    const message = state.error && state.error.message;

    return (
        <LoadingContainer isLoading = {state.isloading} message = {message}>
            {state.data&&(<CardHoldersForm submit={submitData} title={"Edit Card Holder"} values={state.data}/>)}
        </LoadingContainer>
    )
}
