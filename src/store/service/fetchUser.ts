import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {URL_USERS, User} from "../../utils";
import {setErrorMessage} from "../slices/userSlice";


export const fetchUsers = createAsyncThunk<any, User>
('user/getUser',
    async (_, {dispatch}) => {
        return axios.get(URL_USERS, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
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
