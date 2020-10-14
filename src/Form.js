import React from 'react';
import styled from 'styled-components';

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
`

const Errors = styled.div`
    font-size: 0.7em;
    color: red;
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
        <div>
            <Errors>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.password}</div>
                <div>{errors.agree}</div>
            </Errors>
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
                Role
                <select onChange={onChange} value={values.role} name="role">
                    <option value="">---Select an role---</option>
                    <option value="student">Student</option>
                    <option value="alumni">Alumni</option>
                    <option value="instructor">Instructor</option>
                    <option value="tl">Team Lead</option>
                </select>
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
        </div>

    )
}