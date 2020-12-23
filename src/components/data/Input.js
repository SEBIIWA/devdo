import React, { useRef, useState } from "react";
import firebase from "firebase/app";
import { useAuth } from "../utils/AuthContext";
import { useFireStore } from "../utils/Firebase";

import {
  Wrapper,
  FormGroup,
  InputGroup,
  InputField,
  Label,
  Button,
  ErrorMessage,
  White
} from "../styles/Input.element";

const Input = ({ note, docs }) => {
  const nametRef = useRef();
  const textRef = useRef();

  const { currentUser } = useAuth();
  const [error, setError] = useState("");

  const pushData = async e => {
    e.preventDefault();

    if (nametRef.current.value === "" && textRef.current.value === "") {
      setError("take note");
    } else {
      setError("");
      try {
        return await useFireStore
          .collection(`${currentUser.uid}`)
          .doc("socket")
          .collection(`${docs}`)
          .add({
            noteName: nametRef.current.value,
            contentNote: textRef.current.value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          });
      } catch {
        setError("please verify your connection");
      }
    }
  };

  return (
    <>
      <Wrapper>
        <FormGroup>
          <InputGroup>
            <Label htmlfor='text'>Name</Label>
            <InputField
              type='text'
              name='text'
              autoComplete={"false"}
              ref={nametRef}
              required
              placeholder='Note Name'
            />
          </InputGroup>
          <InputGroup>
            <Label htmlfor='field'>Content</Label>
            <InputField
              type='text'
              name='field'
              autoComplete={"false"}
              ref={textRef}
              required
              placeholder='Type Here ...'
            />
          </InputGroup>
        </FormGroup>
        <Button onClick={pushData}>Note for {note}</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <White />
      </Wrapper>
    </>
  );
};

export default Input;
