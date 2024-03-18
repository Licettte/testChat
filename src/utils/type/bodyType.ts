import {MessageType} from "./types";

export  type BodyType = {
    messages: MessageType[], status:string,
    filterName:string,
    chooseDate:string,
    setMessages:((setCallback: (prevState: MessageType[]) => MessageType[]) => void);
}
