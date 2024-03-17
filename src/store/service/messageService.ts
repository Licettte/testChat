import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {MESSAGE, Messages} from "../../utils";

export const fetchMessages = createAsyncThunk<Messages, Messages>
('user/getMessages',
    async () => {
        return axios.get(MESSAGE, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }).then((response) => {
            return response.data;
        })
            .catch((e) => {
                console.log(e)
            });
    });


export const createMessage = createAsyncThunk<Messages, Messages>
('user/createMessage',
    async ({text, name, datetime}) => {
        return axios.post(MESSAGE, {text: text, name: name, datetime: datetime})
            .then((response) => {
                console.log(response.data, "data createMessage")
                return response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    });

