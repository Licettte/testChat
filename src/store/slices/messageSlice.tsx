import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {createMessage, fetchMessages} from "../service/messageService";
import {MessageState, MessageType} from '../../utils'

const initialState: MessageState = {
    id: '',
    text: '',
    message: '',
    messages: [],
    name: '',
    datetime: '',
    status: 'idle',
};

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        setInArrayMessages: (state, action: PayloadAction<MessageType>) => {
            state.messages = [...state.messages, action.payload];
        },

        deleteMessage: (state, action: PayloadAction<MessageType['id']>) => {
            state.text = action.payload;
        },
        editMessage: (state, action: PayloadAction<MessageType['id']>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMessages.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(fetchMessages.fulfilled, (state) => {
                state.status = 'finished';
            })
            .addCase(createMessage.fulfilled, (state, action) => {
                state.status = 'finished';
            })
    }
});

export const {setMessage, setInArrayMessages, deleteMessage, editMessage} = messageSlice.actions;
export const selectMessage = (state: RootState) => state.message.message;
export const selectMessages = (state: RootState) => state.message.messages;
export default messageSlice.reducer;
