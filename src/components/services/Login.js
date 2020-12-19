import React, { useState, useRef } from "react";
import { useAuth } from "../utils/AuthContext";
import { useHistory } from "react-router-dom";
import {
  Wrapper,
  FormGroup,
  Text,
  Form,
  InputGroup,
  Input,
  Button,
  Message,
  Password,
  ErrorMessage,
  Linker,
  Icon,
  Eicon,
  Licon
} from "../styles/Login.element";

const Login = () => {
  // get input value
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [laoding, setLoading] = useState(false);
  const history = useHistory();

  const handleSumbit = async e => {
    // prevent all default exeptions
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Please verfiy your information");
    }
    setLoading(false);
  };

  return (
    <>
      <Wrapper>
        <FormGroup>
          <Text>
            Log In &#160;
            <Icon />
          </Text>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSumbit}>
            <InputGroup>
              <Eicon />
              <Input
                required
                type='email'
                placeholder='Email'
                ref={emailRef}
                autoComplete='nope'
              />
            </InputGroup>
            <InputGroup>
              <Licon />
              <Input
                required
                type='password'
                placeholder='Password'
                ref={passwordRef}
                autoComplete='nope'
              />
            </InputGroup>

            <Button disabled={laoding} type='submit'>
              Log In
            </Button>
          </Form>
          <Password>
            Forgot password? <Linker to='/forgot-password'>...Reset</Linker>
          </Password>
        </FormGroup>
        <Message>
          need an acound? <Linker to='/signup'>Sign Up</Linker>.
        </Message>
      </Wrapper>
    </>
  );
};

export default Login;
