import React from 'react'
import LoadingContainer from 'common/components/LoadingContainer';
import UsersTable from '../components/UsersTable';
import {useFirebase} from 'common/utils/FirebaseHook/FirebaseHook'

export interface User {
    ref: string;
    name: string;
    role: string;
}

export default function UsersContainer(props: any) {
    const {state, fetchData, removeData} = useFirebase();

    React.useEffect(() => {
        fetchData('users');
    }, [])

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

