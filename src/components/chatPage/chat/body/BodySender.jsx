import {ChatBody, ChatDate, MessageContent, MessageSender, NameSender} from "./bodyStyle";
import {Flex} from "../../../../styles/Flex";
import React from "react";


export const BodySender = ({element}) => {
    return (
        <ChatBody $direction='column' key={element.id}>
            <NameSender>   {element.name}</NameSender>
            <MessageSender>
                <MessageContent $direction='column'>
                    <p>{element.text}</p>
                    <ChatDate $justify='flex-end'>
                        <Flex $margin="0 15px">
                            <button>редактировать</button>
                            <button>удалить</button>
                        </Flex>
                        {element.dateForUser}
                    </ChatDate>

                </MessageContent>
            </MessageSender>
        </ChatBody>


    );
};


