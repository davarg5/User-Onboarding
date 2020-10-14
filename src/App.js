import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Form from './Form'


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = ([]);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true);

  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    agree: false
  }

  const initialFormErrors = {
    name: '',
    email: '',
    password: ''
  }

  const change = (inputName, inputValue) {
    
    
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submit = () => {
    
  }

  const Container = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 16px 8px;
    padding: 16px;
    background-color: white;
}  
  `

  return (
    <Container>
      <h1>User Onboarding</h1>
      <Form />
    </Container>
  );
}

export default App;
