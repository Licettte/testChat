import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {URL_USERS,  UserType} from "../../utils";
import {setErrorMessage} from "../slices/userSlice";


export const fetchUsers = createAsyncThunk<any, UserType>
('user/getUser',
    async (_, {dispatch}) => {
        return axios.get(URL_USERS,)
            .then((response) => {
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
