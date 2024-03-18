import React, {useState} from 'react';
import {ButtonModal, InputModal, WrapperModal, FormModal} from "./ModaleStyle";
import {ModalPropsType} from "../../utils";
export const Modal = ({setIsEditText, setIsModalActive}: ModalPropsType) => {

    const [text, setText] = useState('');
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsEditText(text);
        setIsModalActive(false)
    };

    return (
        <WrapperModal $direction='column' $align='flex-start' $justify='flex-start'>
            <FormModal onSubmit={onSubmit}>
                <InputModal value={text} onChange={(e) => setText(e.target.value)}/>
                <ButtonModal type="submit"> ok</ButtonModal>
            </FormModal>
        </WrapperModal>
    );
};
