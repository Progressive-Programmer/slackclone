import React, { useState } from 'react'
import "./ChatInput.css";
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from "firebase";


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const [{user}] = useStateValue();


    const sendMessage = e => {
        e.preventDefault();
        console.log("Chat sent 1")

        if (channelId) {
            console.log("Chat sent 2")
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL  });
        }
    setInput("");
    };

    return (
        <div className="chatInput">
            <form>
                <input
                value={input}
                onChange={e => setInput(e.target.value)} 
                placeholder={`Message #${channelName?.toLowerCase()}`} />
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput;