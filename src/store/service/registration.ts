import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {URL_REGISTRATION, User} from "../../utils";
import {useAppDispatch} from "../hooks";
import {createUser, setErrorMessage} from "../slices/userSlice";

export const registration = createAsyncThunk<User, User>
('user/register',
    async ({email, password, name}, {dispatch}) => {
        return axios.post(URL_REGISTRATION, {email: email, password: password, name: name})
            .then((response) => {
                const dispatch = useAppDispatch();
                return dispatch(createUser(response.data));
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    // dispatch(setErrorMessage(error.response.data));
                } else if (error.request) {
                    // dispatch(setErrorMessage(error.request));
                } else {
                    // dispatch(setErrorMessage(error));
                }
                // dispatch(setErrorMessage(error.config));
            });
    });
