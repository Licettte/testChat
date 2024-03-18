import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
import {URL_MESSAGE, MessageType} from "../../utils";
import {setErrorMessage} from "../slices/userSlice";

export const fetchMessages = createAsyncThunk<MessageType, MessageType>
('user/getMessages',
    async (_,{dispatch}) => {
        return axios.get(URL_MESSAGE, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            }
        }).then((response) => {
            return response.data;
        })
            .catch((error) => {
                if (error.response) {
                    dispatch(setErrorMessage(error.response.data));
                } else if (error.request) {
                    dispatch(setErrorMessage(error.request));
                } else {
                    dispatch(setErrorMessage(error));
                }
                // dispatch(setErrorMessage(error.config));
            });
    });


export const createMessage = createAsyncThunk<MessageType, MessageType>
('user/createMessage',
    async ({text, name, data}) => {
        return axios.post(URL_MESSAGE, {text: text, name: name, datetime: data})
            .then((response) => {
                console.log(response.data, "data createMessage");
                return response.data;
            })
            .catch((error) => {
                console.error(error);
            });
    });

