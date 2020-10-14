import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';

const Container = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 16px 8px;
    padding: 16px;
    background-color: white;
  `

function App() {

  const formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Must be a valid email address').required('Must include an email address'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    agree: yup.boolean().oneOf([true], 'You must accept the terms of service')
  })
  
  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    agree: ''
  }

  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    agree: false
  }

  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true);

  

  
  const change = (inputName, inputValue) => {
    yup.reach(formSchema, inputName).validate(inputValue)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [inputName]: ''
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [inputName]: err.errors[0]
      })
    })  
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      agree: formValues.agree
    }
    postNewUser(newUser);
  }

  const postNewUser = (newUser) => {
    axios.post(`https://reqres.in/api/users`, newUser)
    .then(res => {
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  

  return (
    <div>
    <Container>
      <h1>User Onboarding</h1>
      <Form 
      values={formValues}
      change={change}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      />
    </Container>
    {users.map(user => {
      return (
      <Container>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      </Container>
      )
    })}
    </div>
  );
}

export default App;
