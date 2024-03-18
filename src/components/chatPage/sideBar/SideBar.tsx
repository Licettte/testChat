import React from "react";
import { SideBarContainer} from "./sideBarStyle";
import {ChatUser} from "../chatUser/chatUser";
import FilterUserName from "../filter/FilterUserName";
import {ModalPropsType} from "../../../utils/type/ModalType";
import {SideBarType} from "../../../utils/type/SideBarType";

export const SideBar = ({messages, setFilterName}:SideBarType) => {
    return (
        <SideBarContainer>
            <ChatUser/>
            <FilterUserName messages={messages} setFilterName={setFilterName}/>
        </SideBarContainer>
    )
};
