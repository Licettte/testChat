import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {MainFlex} from "./mainStyle";
import {useAppSelector} from "../../../store/hooks";
import {selectUser} from "../../../store/slices/userSlice";

export const Main = () => {
    const navigate = useNavigate();
    const user = useAppSelector(selectUser);
    useEffect(() => {
        return user.auth ?
            navigate("/profile")
            : navigate("/login")
    }, [user.auth]);

    return (
        <MainFlex>
        </MainFlex>)
};
