import React from 'react';
import {Chats} from './Chats'

export default function AllChats ({chats}) {
   return (
       // loop through an array of chats list
       chats.map(chat => {
           return <Chats chat ={chat} />
       })
   )
};
