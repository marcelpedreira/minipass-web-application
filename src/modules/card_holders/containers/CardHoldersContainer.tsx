import React from 'react'
import LoadingContainer from 'common/components/LoadingContainer'

interface CardHolder {
    name: string;
    card_number: string;
}

interface Error {
    message: string | null;
}

export default function CardHoldersContainer() {
    const card_holders: CardHolder[] = [];
    const loading = true;
    const error: Error = {
        message: null
    };

    const message = error && error.message;

    return (
        <LoadingContainer isLoading = {loading} message = {message}>
            {card_holders.map(card_holder => {
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
