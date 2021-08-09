import React from 'react';
import {SingleChat} from './SingleChat';

export default function OneChat ({chats}) {

    return (
        // loop through an array of chats list
        chats.map(chat => {
            return <SingleChat chat ={chat} />
        })
    )
};