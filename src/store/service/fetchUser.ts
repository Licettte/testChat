import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {USERS, User} from "../../utils";


export const fetchUsers = createAsyncThunk<any, User>
('user/getUser',
    async () => {
        return axios.get(USERS, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        })
            .then((response) => {
                return response.data;
            })
            .catch((e) => {
                console.log(e)
            });
    });
