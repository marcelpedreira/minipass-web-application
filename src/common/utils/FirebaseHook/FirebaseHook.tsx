import React from "react";
import firebase from 'firebaseConfig'

export interface RequestState {
    isloading: boolean;
    data: any;
    error: Error |  null;
}

export default function useFirebase () {
    const initialState: RequestState = {
        isloading: false,
        data: [],
        error: null
    };

    const [state, dispatch] = React.useReducer((state: RequestState, action: any) => {
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

    const fetchCol = async (col: string) => {
        dispatch({type: 'loading'});
        try {
            const db = firebase.firestore();
            const data = await db.collection(col).get();
            console.log('data', data)
            const payload = data.docs.map(doc => ({
                id: doc.ref.id, 
                name: doc.data().name,
                card_number: doc.data().card_number
            }));
            // console.log('payload', payload)
            dispatch({type: 'fetched', payload});
        }
        catch(error) {
            console.log('error', error)
            dispatch({type: 'error', payload: error});
        }
    }

    const removeDoc = async (doc: string) => {
        try {
            const documentRef = firebase.firestore().doc(doc);
            await documentRef.delete();
            return true;
        }
        catch(error) {
            console.log('error', error)
            dispatch({type: 'error', payload: error});
            return false;
        }
    }

    const fetchDoc = async (doc: string) => {
        dispatch({type: 'loading'});
        try {
            const docRef = await firebase.firestore().doc(doc).get();
            const payload = {id: docRef.ref.id, ...docRef.data()};
            dispatch({type: 'fetched', payload});
        }
        catch(error) {
            dispatch({type: 'error', payload: error});
        }
    }

    const editDoc = async (doc: string, newValue: any) => {
        try{
            const documentRef = firebase.firestore().doc(doc);
            await documentRef.set(newValue);
            return true;
        }
        catch(error) {
            dispatch({type: 'error', payload: error});
            console.log('error', error);
            return false;
        }
    }
  
    return { state, fetchCol, removeDoc, fetchDoc, editDoc };
  };