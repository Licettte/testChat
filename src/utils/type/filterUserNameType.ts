import {MessageType} from "./types";

export  type FilterUserNamePropsType = {
    messages: MessageType[],
    setFilterName: React.Dispatch<React.SetStateAction<string>>
}
