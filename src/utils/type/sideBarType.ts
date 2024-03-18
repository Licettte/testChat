import {MessageType} from "./types";

export type SideBarType = {
    messages: MessageType[],
    setFilterName: (value: string) => void,
}
