import {
    ChatStatus, Container,
} from "./bodyStyle";
import {useAppSelector} from "../../../../store/hooks";
import {selectToken,} from "../../../../store/slices/userSlice";
import React, {useEffect, useState} from "react";
import {BodySender} from "./BodySender";
import {BodyRecipient} from "./BodyRecipient";
import {filteredData} from "../../filter/FilterUserDate";

export const Body = ({messages, status, filterName, chooseDate}) => {
    const token = useAppSelector(selectToken);
    const userName = token[2];
    const [isFilter, setIsFilter] = useState(true);
    const [messagesFilter, setMessagesFilter] = useState([]);


    useEffect(() => {
        setIsFilter(true)
    }, [chooseDate]);

    useEffect(() => {
        const start = String(chooseDate[0]);
        const end = chooseDate[1];
        // isFilter ? setMessagesFilter( () => [...filteredData(messages, '2024-01-01', '2024-03-16')])
        isFilter ? setMessagesFilter(() => [...filteredData(messages, start, end)])
            : setMessagesFilter(() => [...messages])
    }, [chooseDate, isFilter, messages]);

    console.log(messages, "messages")
    console.log(messagesFilter, "messagesFilter")

    return (<Container>
        {messagesFilter.map(element => element.name === userName ?
            <span style={{display: filterName == 'Dima' ? "none" : "block"}}>
                <BodySender element={element} key={element.id}/>
                </span>
            :
            <span style={{display: filterName == 'Alice' ? "none" : "block"}}>
                <BodyRecipient element={element} key={element.id}/>
                </span>)
        }

        <ChatStatus> {status}</ChatStatus>
    </Container>)
};
