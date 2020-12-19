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
  ErrorMessage,
  Linker,
  Icon,
  Uicon,
  Eicon,
  Licon
} from "../styles/Signup.element";

const Signup = () => {
  // get input value
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [laoding, setLoading] = useState(false);
  const history = useHistory();

  const handleSumbit = async e => {
    // prevent all default exeptions
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("failed to create account");
    }
    setLoading(false);
  };

  return (
    <>
      {" "}
      <Wrapper>
        <FormGroup>
          <Text>
            Sign Up &#160;
            <Icon />
          </Text>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSumbit}>
            <InputGroup>
              <Uicon />
              <Input
                required
                type='text'
                placeholder='username'
                ref={usernameRef}
                autoComplete='nope'
              />
            </InputGroup>
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
            <InputGroup>
              <Licon />
              <Input
                required
                type='password'
                placeholder='Confirm Password'
                ref={passwordConfirmRef}
                autoComplete='nope'
              />
            </InputGroup>
            <Button disabled={laoding} type='submit'>
              Sign Up
            </Button>
          </Form>
        </FormGroup>
        <Message>
          your are already signed up? <Linker to='/login'>Log in</Linker>.
        </Message>
      </Wrapper>
    </>
  );
};

export default Signup;
