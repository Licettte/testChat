import {MessageType} from "./types";

export  type ElementType = {
    text: string,
    name: string,
    id: string,
    dateForUser: string,
    data: string
}

export  type BodySenderType = {
    element: {
        text: string,
        name: string,
        id: string,
        dateForUser: string,
        data: string
    },
    messages: MessageType[],
    setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>
}
