import React, {useEffect, useState,} from "react";
import {SideBar} from "./sideBar/SideBar";
import {Body} from "./chat/body/Body";
import {Message} from "./chat/message/Message";
import {ChatFlex, Main} from "./chatPageStyle";
import {socket} from "../../core/socket";
import DatePicker from "../calendar/DatePicker";
import {Flex} from "../../styles/Flex";
import {archiveMessages} from "./archiveMessages";
import {MessageType} from "../../utils";

export const ChatPage = () => {

    const [messages, setMessages] = useState<MessageType[]>(archiveMessages);
    const [status, setStatus] = useState('');
    const [date, setDate] = useState(new Date());
    const [filterName, setFilterName] = useState('');
    const [chooseDate, setChooseDate] = useState('');

    useEffect(() => {
        socket.on('response', (data) => setMessages([...messages, data]));
    }, [socket, messages]);


    useEffect(() => {
        socket.on('responseTyping', (data) => setStatus(data))
    }, [socket, status]);

    return (
        <ChatFlex>
            <SideBar messages={messages} setFilterName={setFilterName}/>
            <Main $align='center'>
                <Body messages={messages} status={status} filterName={filterName} chooseDate={chooseDate}
                      setMessages={setMessages}/>
                <Message/>
                <Flex $margin="80px 0">
                    <DatePicker value={date} setChooseDate={setChooseDate}/>
                </Flex>
            </Main>
        </ChatFlex>)
};
