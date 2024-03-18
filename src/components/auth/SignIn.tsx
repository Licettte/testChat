import {EntryForm} from "../entryForm/EntryForm";
import React, {useCallback, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {useNavigate} from "react-router";
import {login} from "../../store/service/login";
import {selectUser} from "../../store/slices/userSlice";
import {AuthLink, Div,} from "./authStyle";

export const SignIn = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.auth) {
            navigate("/profile")
        }
    }, [user.auth]);
    const handleLogin = useCallback((email: string, password: string) => {
        dispatch(login({email: email, password: password}));
    }, []);


    console.log(user.errorMessage, "user.errorMessage")
    return (

        <div>
            <h2>Войти</h2>
            <EntryForm title="Войти" handleClick={handleLogin}/>
            <Div style={{
                color: "red",
                margin: "0 0 30px"
            }}>   {user.errorMessage.length !== 0 ? user.errorMessage : null} </Div>
            <Div>
                нет аккаунта?
                <AuthLink to='/register'>Зарегистрироваться</AuthLink>
            </Div>

        </div>
    )
};


