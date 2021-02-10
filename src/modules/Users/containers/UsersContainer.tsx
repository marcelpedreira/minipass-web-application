import React from 'react'
import LoadingContainer from 'common/components/LoadingContainer';
import firebase from 'firebaseConfig';
import UsersTable from '../components/UsersTable';

export interface User {
    ref: string;
    name: string;
    role: string;
}

interface Error {
    message: string | null;
}

interface UsersState {
    isloading: boolean;
    data: User[];
    error: Error |  null;
}

export default function CardHoldersContainer(props: any) {
    const initialState: UsersState = {
        isloading: false,
        data: [],
        error: null
    };

    const [state, dispatch] = React.useReducer((state: UsersState, action: any) => {
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
        const data = await db.collection('users').get();
        const payload = data.docs.map(doc => ({ref: doc.ref, ...doc.data()}));
        dispatch({type: 'fetched', payload});
    }

    const message = state.error && state.error.message;

    return (
        <LoadingContainer isLoading = {state.isloading} message = {message}>
            {/* {state.data&&state.data.map((card_holder: CardHolder) => {
                return (
                    <>
                        <p>name: {card_holder.name}</p>
                        <p>card_number: {card_holder.card_number}</p>
                    </>
                )
            })} */}
            <UsersTable data={state.data} history={props.history} />
        </LoadingContainer>
    )
}

