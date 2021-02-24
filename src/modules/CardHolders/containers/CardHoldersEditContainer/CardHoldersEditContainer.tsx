import React from 'react'
import { useHistory, useParams } from "react-router-dom";

import useFirebase from 'common/utils/FirebaseHook/FirebaseHook'
import LoadingContainer from 'common/components/LoadingContainer'
import CardHoldersForm from '../../components/CardHoldersForm';
import {ToastContext} from 'App';
import {CardHolder} from '../CardHoldersContainer'

interface RouteParams {
    id: string
}

export default function CardHoldersEditContainer() {
    const {showToast} = React.useContext(ToastContext);
    const history = useHistory();
    const params = useParams<RouteParams>();
    const {state, fetchDoc, editDoc} = useFirebase();

    React.useEffect(() => {
        fetchDoc(`card_holders/${params.id}`);
    }, []);

    const submitData = async (values: CardHolder) => {
        const newValue = {
            name: values.name,
            card_number: values.card_number
        }
        if(editDoc(`card_holders/${values.id}`, newValue)){
            history.push('/cardholders');
            showToast("Card Holder Edited");
        }
    }

    const cancelSubmit = () => {
        history.push('/cardholders');
    }

    const message = state.error && state.error.message;

    return (
        <LoadingContainer isLoading = {state.isloading} message = {message}>
            {state.data&&(<CardHoldersForm submit={submitData} cancel={cancelSubmit} title={"Edit Card Holder"} values={state.data}/>)}
        </LoadingContainer>
    )
}
