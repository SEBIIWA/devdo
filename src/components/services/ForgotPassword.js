import React, { useState, useRef } from "react";
import { useAuth } from "../utils/AuthContext";
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
  SuccessMessage,
  Linker,
  Icon,
  Eicon
} from "../styles/ForgotPassword.element";

const ForgotPassword = () => {
  // get input value
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [laoding, setLoading] = useState(false);

  const handleSumbit = async e => {
    // prevent all default exeptions
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your email for instructions");
    } catch {
      setError("you must enter a valid email");
    }
    setLoading(false);
  };

  return (
    <>
      <Wrapper>
        <FormGroup>
          <Text>
            Password Reset &#160;
            <Icon />
          </Text>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {message && <SuccessMessage>{message}</SuccessMessage>}
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

            <Button disabled={laoding} type='submit'>
              Reset Password
            </Button>
          </Form>
        </FormGroup>
        <Message>
          go back to <Linker to='/login'>log In</Linker>.
        </Message>
      </Wrapper>
    </>
  );
};

export default ForgotPassword;
