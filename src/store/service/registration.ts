import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {REGISTRATION, User} from "../../utils";

export const registration = createAsyncThunk<User, User>
('user/register',
    async ({ email, password, name}) => {
                return axios.post(REGISTRATION, {email: email, password: password, name: name})
            .then((response) => {
                             return response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    });
