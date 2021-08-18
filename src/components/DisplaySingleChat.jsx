import React , {useState}from 'react';
import OneChat from './OneChat';
import { connect } from 'react-redux';
import SingleChatNav from './SingleChatNav';
import SingleChatMic from './SingleChatMic';
import { getChatData, fetchChats } from '../store/Actions/actions';

export function DisplaySingleChat () {

    return (
        < >   
          <SingleChatNav/>  
          <SingleChatMic/>
        </>
    )
 };
 
 
 export default DisplaySingleChat;