import React, {useEffect, useState} from "react";
import {Button, FormSend, InputMessage} from "./messageStyle";
import {useAppDispatch, useAppSelector} from "../../../../store/hooks";
import {selectOrder, selectToken} from "../../../../store/slices/userSlice";
import {socket} from "../../../../core/socket";
import {getCurrentDate} from "../../../../calendar/currentDate";
import {selectMessage, selectMessages, setMessage} from "../../../../store/slices/messageSlice";

export const Message = ({status,}) => {

    // const [message, setMessage] = useState('');
    const dispatch = useAppDispatch();
    const message = useAppSelector(selectMessage);
    const token = useAppSelector(selectToken);
    const userName = token[2];

    const startTaping = () => {
        socket.emit('startTyping', `${userName}  is typing...`);
    };
    const stopTaping = () => {
        socket.emit('stopTyping', '');
    };

    console.log(message , 'message')
    const handleSend = (e) => {
        e.preventDefault();
        if (message.length && userName) {
            socket.emit('message', {
                text: message,
                name: userName,
                id: `${socket.id}-${Math.random()}`,
                dateForUser: getCurrentDate(),
                data:new Date(),
                socketID: socket.id
            });
        }
        dispatch(setMessage(''));
    };

    return (
        <div>
            <FormSend action="" onSubmit={handleSend}>
                <InputMessage type="text"
                              value={message}
                              onChange={(e) => dispatch(setMessage(e.target.value))}
                              onFocus={startTaping}
                              onBlur={stopTaping}
                />
                <Button>send</Button>
            </FormSend>
        </div>)


    //
    // const [message, setMessage] = useState('');
    // const token = useAppSelector(selectToken);
    // const userName = token[2];
    //
    //
    //
    //
    // const startTaping = () => {
    //     socket.emit('startTyping', `${userName}  is typing...`);
    // };
    // const stopTaping = () => {
    //     socket.emit('stopTyping', '');
    // };
    // const handleSend = (e) => {
    //     e.preventDefault();
    //     if (message.length && userName) {
    //         socket.emit('message', {
    //             text: message,
    //             name: userName,
    //             id: `${socket.id}-${Math.random()}`,
    //             date: getCurrentDate(),
    //             socketID: socket.id
    //         });
    //     }
    //     setMessage('');
    // };
    //
    // return (
    //     <div>
    //         <FormSend action="" onSubmit={handleSend}>
    //             <InputMessage type="text"
    //                           value={message}
    //                           onChange={(e) => setMessage(e.target.value)}
    //                           onFocus={startTaping}
    //                           onBlur={stopTaping}
    //             />
    //             <Button>send</Button>
    //         </FormSend>
    //     </div>)
};
