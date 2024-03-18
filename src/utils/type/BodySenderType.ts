import {MessageType} from "./types";

export  type ElementType = {
    text: string,
    name: string,
    id: string,
    dateForUser: string,
    data: string
}
function displayData(data: number | string) {
    console.log(data);
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
    setMessages:
        (setCallback: (prevState: MessageType[]) => MessageType[]) => void
        |
        ((value: MessageType[]) => void),
}
