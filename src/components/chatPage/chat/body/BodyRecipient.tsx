import React from "react";
import {
    ChatBody,
    ChatDate,
    MessageContent,
    MessageRecipient,
    NameRecipient,
} from "./bodyStyle";
import {MessageType} from "../../../../utils";
export const BodyRecipient = ({element}: any) => {
    return (
        <ChatBody $direction='column' key={element.id}>
            <NameRecipient>
                {element.name}
            </NameRecipient>
            <MessageRecipient>
                <MessageContent $direction='column'>
                    <p>{element.text}</p>
                    <ChatDate $justify='flex-end'>
                        {element.dateForUser}
                    </ChatDate>
                </MessageContent>
            </MessageRecipient>
        </ChatBody>
    );
};
