import {
    ChatStatus, Container,
} from "./bodyStyle";
import {useAppSelector} from "../../../../store";
import {selectToken,} from "../../../../store/slices/userSlice";
import React, {useEffect, useState} from "react";
import {BodySender} from "./BodySender";
import {BodyRecipient} from "./BodyRecipient";
import {filteredData} from "../../filter/FilterUserDate";
import {BodyType, MessageType} from "../../../../utils";


export const Body = ({messages, status, filterName, chooseDate, setMessages}:BodyType) => {
    const token = useAppSelector(selectToken);
    const userName = token[2];
    const [isFilter, setIsFilter] = useState(false);
    const [messagesFilter, setMessagesFilter] = useState<MessageType[]>(() => [...messages]);

    useEffect(() => {
        if(chooseDate.length===1){
            setIsFilter(true)
        }
    }, [chooseDate]);

    useEffect(() => {
        const start = chooseDate[0];
        const end = chooseDate[1];
        isFilter ?     setMessagesFilter(() => [...filteredData(messages, start, end)]):
            setMessagesFilter(() => [...messages])
    }, [chooseDate, messages]);

    console.log(userName, "userName")

    return (<Container>
        {messagesFilter.map(element => element.name === userName ?
            <span style={{display: filterName === 'Dima' ? "none" : "block"}} key={element.id}>
                <BodySender element={element} messages={messages} setMessages={setMessages}/>
                </span> : <span style={{display: filterName == 'Alice' ? "none" : "block"}} key={element.id}>
                <BodyRecipient element={element}/>
                </span>)}
        <ChatStatus> {status}</ChatStatus>
    </Container>)
};
