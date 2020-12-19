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
  Eicon,
  Licon
} from "../styles/UpdateProfiles.element";

const UpdateProfile = () => {
  // get input value
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSumbit = async e => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Wrapper>
        <FormGroup>
          <Text>
            Update Profile &#160;
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
                defaultValue={currentUser.email}
              />
            </InputGroup>
            <InputGroup>
              <Licon />
              <Input
                type='password'
                placeholder='leave black to keep password the same'
                ref={passwordRef}
                autoComplete='nope'
              />
            </InputGroup>
            <InputGroup>
              <Licon />
              <Input
                type='password'
                placeholder='leave black to keep password the same'
                ref={passwordConfirmRef}
                autoComplete='nope'
              />
            </InputGroup>
            <Button disabled={loading} type='submit'>
              Update
            </Button>
          </Form>
        </FormGroup>
        <Message>
          Go back to <Linker to='/'>Dhabaord</Linker>.
        </Message>
      </Wrapper>
    </>
  );
};

export default UpdateProfile;
