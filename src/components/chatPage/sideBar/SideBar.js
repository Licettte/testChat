import React, {useState} from "react";
import {FormRadioBtn, InputRadio, Label, SideBarContainer} from "./sideBarStyle";
import {ChatUser} from "../chatUser/chatUser";
import {Flex} from "../../../styles/Flex";
import {useAppSelector} from "../../../store/hooks";
import {selectToken} from "../../../store/slices/userSlice";
import FilterUserName from "../filter/FilterUserName";
import {DatePicker} from "../../calendar/DatePicker";


export const SideBar = ({messages, setFilterName}) => {

    return (
        <SideBarContainer>
            <ChatUser/>
            <FilterUserName messages={messages} setFilterName={setFilterName}/>

            {/*<Div $direction='column' $align="center">*/}
            {/*    <h3>Friends</h3>*/}
            {/*    <ul>*/}
            {/*        {user.users.map((user, index) =>*/}

            {/*            <li key={user.email} onClick={()=>setCurrenttUsers(user.name)}>     {user.name}</li>*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*</Div>*/}
        </SideBarContainer>
    )
};
