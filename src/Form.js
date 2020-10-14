import React from 'react';
import styled from 'styled-components';

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Form(props) {
    const {values, change, submit, disabled, errors} = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <Inputs>
            <label>
                Name
                <input 
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
                />
            </label>
            <label>
                Email
                <input 
                type='email'
                name='email'
                value={values.email}
                onChange={onChange}
                />
            </label>
            <label>
                Password
                <input 
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}
                />
            </label>
            <label>
                Terms of Service
                <input 
                type='checkbox'
                name='agree'
                checked={values.agree}
                onChange={onChange}
                />
            </label>
            <button disabled={disabled}>Submit</button>
            </Inputs>
        </form>

    )
}