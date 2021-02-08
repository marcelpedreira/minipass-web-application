import React from 'react'
import LoadingContainer from 'common/components/LoadingContainer'
import firebase from 'firebaseConfig'

interface CardHolder {
    name: string;
    card_number: string;
}

interface Error {
    message: string | null;
}

interface CardHoldersState {
    isloading: boolean;
    data: CardHolder[];
    error: Error |  null;
}

export default function CardHoldersContainer() {
    const initialState: CardHoldersState = {
        isloading: false,
        data: [],
        error: null
    };

    const [state, dispatch] = React.useReducer((state: CardHoldersState, action: any) => {
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
        fetchData();
    }, [])

    const fetchData = async () => {
        dispatch({type: 'loading'});
        const db = firebase.firestore();
        const data = await db.collection('card_holders').get();
        const payload = data.docs.map(doc => doc.data());
        dispatch({type: 'fetched', payload});
    }

    const message = state.error && state.error.message;

    return (
        <LoadingContainer isLoading = {state.isloading} message = {message}>
            {state.data&&state.data.map((card_holder: CardHolder) => {
                return (
                    <>
                        <p>name: {card_holder.name}</p>
                        <p>card_number: {card_holder.card_number}</p>
                    </>
                )
            })}
        </LoadingContainer>
    )
}
