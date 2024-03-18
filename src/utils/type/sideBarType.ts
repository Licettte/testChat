import {MessageType} from "./types";

export type SideBarType = {
    messages: MessageType[],
    setFilterName: React.Dispatch<React.SetStateAction<string>>
}
