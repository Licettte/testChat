
import {Route, Routes} from "react-router";
import {PageRoutes} from "../../utils/constant/routes";
import {Layout} from "../layouts/layout/Layout";
import {Main} from "../layouts/main/Main";
import {ChatPage} from "../chatPage/ChatPage";
import {SignUp} from "../auth/SignUp";
import {SignIn} from "../auth/SignIn";
import React, { FC } from "react";
export const Router = () => {
    return (
        <Routes>
            <Route path={PageRoutes.LAYOUT} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={PageRoutes.PROFILE} element={<ChatPage/>}/>
                <Route path={PageRoutes.REGISTRATION} element={<SignUp/>}/>
                <Route path={PageRoutes.LOGIN} element={<SignIn/>}/>
                <Route path='*' element="Error"/>
            </Route>
        </Routes>
    );
};

