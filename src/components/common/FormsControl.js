import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form';

const ErrArea = styled.textarea`
    resize: none;
    width: 520px;
    height: 60px;
    border: solid;
    border-radius: 5px;
    border-color: red;
`
const Textarea = styled.textarea`
    resize: none;
    width: 520px;
    height: 60px;
    border: solid;
    border-radius: 10px;
    border-color: #C9F4F1;
`

const ErrInput = styled.input`
    resize: none;
    width: 520px;
    height: 20px;
    border: solid;
    border-radius: 5px;
    border-color: red;
`
const Input = styled.input`
    resize: none;
    width: 250px;
    height: 20px;
    border: solid;
    border-radius: 10px;
    border-color: #C9F4F1;
`

export const TextArea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            {hasError ? <ErrArea {...props}{...input} /> : <Textarea {...props}{...input} />}
            <div>
                {hasError && meta.error && <span>{meta.error}</span>}
            </div>

        </div>
    )
}

export const InputForm = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            {hasError ? <ErrInput {...props}{...input} /> : <Input {...props}{...input} />}
            <div>
                {hasError && meta.error && <span>{meta.error}</span>}
            </div>

        </div>
    )
}