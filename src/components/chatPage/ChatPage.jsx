import React, {useCallback, useEffect, useState} from "react";

import {io, Socket} from "socket.io-client";

import {SideBar} from "./sideBar/SideBar";
import {Body} from "./chat/body/Body";
import {Message} from "./chat/message/Message";

import {ChatFlex, Main} from "./chatPageStyle";
import {ChatUser} from "./chatUser/chatUser";
import {socket} from "../../core/socket";
import {login} from "../../store/service/login";
import {createMessage} from "../../store/service/messageService";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {selectMessage, selectMessages, setinArrayMessages} from "../../store/slices/messageSlice";
import {registration} from "../../store/service/registration";
import FilterUserName from "./filter/FilterUserName";
import {BodySender} from "./chat/body/BodySender";
import {DatePicker} from "../../calendar/DatePicker";
import {Flex} from "../../styles/Flex";


export const ChatPage = () => {


    const archiveMessages = [
        {
            text: 'На мели мы лениво ловили налима и меняли налима мы нам на линя. О любви не меня ли вы мило молили',
            name: 'Alice',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.4626079959470528',
            dateForUser: '29 Февраля',
            data: '2024-02-29T09:00:52.558Z',
        },


        {
            text: 'и в туманы лимана манили меня?',
            name: 'Dima',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.20965390840987275',
            dateForUser: '29 Февраля',
            data: '2024-02-29T09:00:52.558Z',
        },


        {
            text: 'Нали́м (нали́ма) — лат. lota lota, крупная речная рыба до 1,2м до 18кг',
            name: 'Dima',
            id: 'r3TUlR1UG7BhcGCfAABJ-0.20965390840987275',
            dateForUser: '3 Марта',
            data: '2024-03-03T09:00:52.558Z'
        },

        {
            text: 'jjjjjj',
            name: 'Alice',
            id: 'Q7JZVtpiv5W2vELOAAB7-0.23361433527889597',
            dateForUser: '14 Апреля',
            data: '2024-03-14T19:22:04.728Z',
        },

        {
            text: 'jjjjjjjj',
            name: 'Alice',
            id: 'Q7JZVtpiv5W2vELOAAB7-0.8697362800760708',
            dateForUser: '14 Апреля',
            data: '2024-03-14T19:22:06.348Z',
        },

        {
            text: 'jjjjjj',
            name: 'Alice',
            id: 'Q7JZVtpiv5W2vELOAAB7-0.6729058367979186',
            dateForUser: '14 Апреля',
            data: '2024-03-14T19:22:08.738Z',
        }
    ]

    const [messages, setMessages] = useState(archiveMessages);
    const [status, setStatus] = useState('');

    useEffect(() => {
        socket.on('response', (data) => setMessages([...messages, data]));
    }, [socket, messages]);


    // setMessages({})
    // useEffect(() => {
    //     socket.on('response', (data) => dispatch(createMessage({
    //         text: data.text,
    //         name: data.name,
    //         datetime: data.date
    //     })));
    // }, [socket, messagesBD]);

    const [date, setDate] = useState(new Date())


    useEffect(() => {
        socket.on('responseTyping', (data) => setStatus(data))
    }, [socket, status]);

    const [filterName, setFilterName] = useState('');
    const [chooseDate, setChooseDate] = useState('');

    return (

        <ChatFlex>
            <SideBar messages={messages} setFilterName={setFilterName}/>
            <Main $align='center'>
                <Body messages={messages} status={status} filterName={filterName} chooseDate={chooseDate}/>
                <Message/>
                <Flex $margin="80px 0">
                    <DatePicker value={date} onChange={setDate} setChooseDate={setChooseDate}/>

                </Flex>
            </Main>
        </ChatFlex>)
};
