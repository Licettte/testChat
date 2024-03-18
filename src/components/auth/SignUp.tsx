import React, {useCallback} from "react";
import {EntryForm} from "../entryForm/EntryForm";
import {useAppDispatch, useAppSelector} from "../../store";
import {registration} from "../../store/service/registration";
import {useNavigate} from "react-router";
import {selectUser} from "../../store/slices/userSlice";
import {AuthLink, Div, Span} from "./authStyle";
import {BRIGHT_PRIMARY_COLOR} from "../../styles/colors";

export const SignUp = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const handleRegister = useCallback((email: string, password: string, name: string,) => {
        dispatch(registration({email: email, password: password, name: name,}));
    }, [dispatch]);

    return (
        <>
            {/*{user.errorMessage}*/}
            <h2>Регистрация</h2>
            <EntryForm title="Зарегистрироваться" handleClick={handleRegister}/>

            <Div>
                <Span $color={BRIGHT_PRIMARY_COLOR}>{user.message}</Span>
                уже есть аккаунт?
                <AuthLink to='/login'>Войти</AuthLink>
            </Div>
        </>)
};
