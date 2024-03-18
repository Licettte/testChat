import {ChatBody, ChatDate, MessageContent, MessageSender, NameSender} from "./bodyStyle";
import {Flex} from "../../../../styles/Flex";
import React, {useEffect, useState} from "react";
import {Modal} from "../../../modal/Modal";
import {BodySenderType, ElementType} from "../../../../utils";


export const BodySender = ({element, messages, setMessages}: BodySenderType) => {

        const [isModalActive, setIsModalActive] = useState(false);
        const [editText, setIsEditText] = useState('');
        const [elementMessages, setElementMessages] = useState<ElementType | null>(null);

        useEffect(() => {
            setMessages((prevState) => prevState
                .map(element =>
                    element.id === elementMessages?.id ?
                        {...element, text: editText}
                        : element))
        }, [editText]);

        const editMessage = (el: ElementType) => {
            setElementMessages(el);
            setIsModalActive(true);
        };
        const deleteMessage = (el: ElementType) => {
            console.log(el)
            const filteredMessage = messages.filter(element => element.id !== el.id);
            setMessages(filteredMessage)
        };

        return (<ChatBody $direction='column' key={element.id}>
            <NameSender>   {element.name}</NameSender>
            <MessageSender>
                <MessageContent $direction='column'>
                    {isModalActive ?
                        <Modal setIsEditText={setIsEditText} setIsModalActive={setIsModalActive}/>
                        : null
                    }
                    <p>{element.text}</p>
                    <ChatDate $justify='flex-end'>
                        <Flex $margin="0 15px">
                            <button style={{padding: '0 10px'}} onClick={() => editMessage(element)}>редактировать
                            </button>
                            <button onClick={() => deleteMessage(element)}>удалить</button>
                        </Flex>
                        {element.dateForUser}
                    </ChatDate>
                </MessageContent>
            </MessageSender>
        </ChatBody>);
    }
;
