import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

export const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Text = styled.h2`
  margin: 15px 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const Form = styled.form`
  width: 300px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Input = styled.input`
  padding: 10px;
  width: 80%;
`;

export const Button = styled.button`
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin: 15px 0px;
  padding: 10px 25px;
  background-color: #222222;
`;

export const Message = styled.p`
  margin: 15px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Password = styled.p`
  margin: 15px;
  text-transform: capitalize;
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  text-transform: capitalize;
  background-color: #ff4136;
`;

export const Linker = styled(Link)`
  color: #b10dc9;
  text-decoration: none;

  &:hover {
    color: #2ecc40;
  }
`;

export const Icon = styled(FiLogIn)``;
export const Eicon = styled(FiMail)``;
export const Licon = styled(FiLock)``;
