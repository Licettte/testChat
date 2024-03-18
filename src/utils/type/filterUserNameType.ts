import {MessageType} from "./types";

export  type FilterUserNamePropsType = {
    messages: MessageType[],
    setFilterName: (value: string) => void
}
