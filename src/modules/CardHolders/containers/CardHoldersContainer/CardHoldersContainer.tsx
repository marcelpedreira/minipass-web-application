import React from 'react'
import LoadingContainer from 'common/components/LoadingContainer'
// import firebase from 'firebaseConfig'
import CardHoldersTable from '../../components/CardHoldersTable';
import {ToastContext} from 'App';
import useFirebase from 'common/utils/FirebaseHook/FirebaseHook'

export interface CardHolder {
    id: string;
    name: string;
    card_number: string;
}

// interface Error {
//     message: string | null;
// }

// interface CardHoldersState {
//     isloading: boolean;
//     data: CardHolder[];
//     error: Error |  null;
// }

export default function CardHoldersContainer(props: any) {
    // const initialState: CardHoldersState = {
    //     isloading: false,
    //     data: [],
    //     error: null
    // };

    const {showToast} = React.useContext(ToastContext);
    const {state, fetchCol, removeDoc} = useFirebase();

    // const [state, dispatch] = React.useReducer((state: CardHoldersState, action: any) => {
    //     switch (action.type) {
    //         case 'loading':
    //             return {
    //                 isloading: true,
    //                 data: state.data,
    //                 error: state.error
    //             };
    //         case 'fetched':
    //             return {
    //                 isloading: false,
    //                 data: action.payload,
    //                 error: state.error
    //             };
    //         case 'error':
    //             return {
    //                 isloading: false,
    //                 data: state.data,
    //                 error: action.payload,
    //             };
    //         default:
    //         throw new Error();
    //     }
    // }, initialState);

    React.useEffect(() => {
        fetchCol('card_holders');
    }, []);

    // const fetchData = async () => {
    //     dispatch({type: 'loading'});
    //     try {
    //         const db = firebase.firestore();
    //         const data = await db.collection('card_holders').get();
    //         // console.log('data', data)
    //         const payload = data.docs.map(doc => ({
    //             id: doc.ref.id, 
    //             name: doc.data().name,
    //             card_number: doc.data().card_number
    //         }));
    //         // console.log('payload', payload)
    //         dispatch({type: 'fetched', payload});
    //     }
    //     catch(error) {
    //         console.log('error', error)
    //         dispatch({type: 'error', payload: error});
    //     }
    // }

    // const removeData = async (id: string) => {
    //     try {
    //         const documentRef = firebase.firestore().doc(`card_holders/${id}`);
    //         await documentRef.delete();
    //         showToast('Card holder successfully deleted.');
    //         fetchData();
    //     }
    //     catch(error) {
    //         console.log('error', error)
    //         dispatch({type: 'error', payload: error});
    //     }
    // }

    const remove = (id: string) => {
        if(removeDoc(`card_holders/${id}`)) {
            showToast('Card holder successfully deleted.');
            fetchCol('card_holders');
        }
    }

    const message = state.error && state.error.message;

    return (
        <LoadingContainer isLoading = {state.isloading} message = {message}>
            <CardHoldersTable data={state.data} history={props.history} remove={remove}/>
        </LoadingContainer>
    )
}
