import {
    ChatBody,
    ChatDate,
    MessageContent,
    MessageRecipient,
    MessageSender,
    NameRecipient,
    NameSender
} from "./bodyStyle";
import {Flex} from "../../../../styles/Flex";
import React from "react";


export const BodyRecipient = ({element}) => {
    return (
        <ChatBody $direction='column' key={element.id}>
            <NameRecipient>
                {/*Sasa*/}
                {element.name}
            </NameRecipient>
            <MessageRecipient>
                <MessageContent $direction='column'>
                    <p>{element.text}</p>
                    <ChatDate $justify='flex-end'>
                        {element.dateForUser}
                    </ChatDate>
                </MessageContent>

                {/*<p>{element.text}</p>*/}
                {/*<ChatDate $justify='flex-end'>{element.date}</ChatDate>*/}
            </MessageRecipient>
        </ChatBody>
    );
};


