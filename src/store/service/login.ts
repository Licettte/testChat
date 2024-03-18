import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {URl_LOGIN, User} from "../../utils";
import {setErrorMessage, setIsAuth} from "../slices/userSlice";

export const login = createAsyncThunk<any, User>
('/user/login',
    async ({email, password}, {dispatch}) => {
        return axios.post(URl_LOGIN, {email: email, password: password})
            .then((response) => {
                dispatch(setIsAuth(true));
                dispatch(setErrorMessage(''));
                return response.data;
            })
            .catch((error) => {
                dispatch(setIsAuth(false));
                if (error.response) {
                    dispatch(setErrorMessage(error.response.data.message));
                } else if (error.request) {
                    // dispatch(setErrorMessage(error.request.message));
                } else {
                    // dispatch(setErrorMessage(error));
                }
                // dispatch(setErrorMessage(error.config));
            });
    });



