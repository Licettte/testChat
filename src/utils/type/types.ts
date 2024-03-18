import {ReactNode} from "react";

export type EntryFormType = {
    title: string,
    handleClick: (name: string, email: string, password: string) => void;
}

export type FlexType = {
    $direction?: string,
    $align?: string,
    $justify?: string,
    $margin?: string
    $padding?: string
}

export type FlexChildren = {
        children: ReactNode
    }
    & FlexType

export type  UserType = {
    auth?: boolean;
    name?: string,
    email: string,
    password: string,
    id?: any
};

export type MessageType = {
    text: string,
    name: string,
    id: string,
    dateForUser: string,
    data: string
};

export type UserState = {
    name: string,
    email: string
    password: string,
    status: 'idle' | 'loading' | 'finished' | 'error';
    auth: boolean,
    token: string[];
    users: UserType[];
    message: string,
    errorMessage: string,
    usersList: UserType[];
}

export type MessageState = {
    id: string,
    text: string,
    message: string,
    messages: MessageType[],
    name: string,
    datetime: string
    status: 'idle' | 'loading' | 'finished' | 'error';
}
