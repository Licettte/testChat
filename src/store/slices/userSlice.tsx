import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {registration} from "../service/registration";
import { UserState} from "../../utils/type/types";
import {login} from "../service/login";
import {fetchUsers} from "../service/fetchUser";
import {jwtDecode} from "jwt-decode";

const initialState: UserState = {
    name: '',
    email: '',
    password: '',
    status: 'idle',
    auth: false,
    token: [],
    users: [],
    message: '',
    errorMessage: '',
    usersList: []
};

export const userSlice = createSlice({

    name: 'user',
    initialState,

    reducers: {
        createUser: (state, action) => {
            state.usersList.push(action.payload)
            console.log(state.usersList, "state.usersList")
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserEmail: (state, action) => {
            state.email = action.payload;
        },
        setUserPassword: (state, action) => {
            state.password = action.payload;
        },
        setIsAuth: (state, action) => {
            state.auth = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registration.rejected, (state) => {
                state.auth = false;
                state.status = 'error';
            })
            .addCase(registration.fulfilled, (state, action) => {
                state.status = 'finished';
                state.message = 'Вы успешно зарегистрировались';
                state.name = '';
                state.email = '';
                state.password = '';

            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'error';
                state.auth = false;
                console.log(state.auth, "state.auth")
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'finished';
                if (action.payload) {
                    // @ts-ignore
                    const decoded = jwtDecode(Object.values(action.payload)[0]);
                    // @ts-ignore
                    state.token = Object.values(decoded);
                }
            }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'finished';
            state.users = action.payload
        });
    },
});

export const {setUserName, setUserEmail, setUserPassword, setIsAuth, createUser, setErrorMessage} = userSlice.actions;
export const selectOrder = (state: RootState) => state.user;

export const selectToken = (state: RootState) => state.user.token;

export default userSlice.reducer;
