import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {LOGIN, User} from "../../utils";

export const login = createAsyncThunk<any, User>
('/user/login',
    async ({email, password}) => {
        return axios.post(LOGIN, {email: email, password: password})
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                console.log(e)
            });
    });

