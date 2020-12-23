import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column !important;
`;

export const FormGroup = styled.form`
  width: 50%;
  display: flex;
  color: #dddddd;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const InputField = styled.input`
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  font-size: 0.9rem;
  padding: 15px 0px;
  letter-spacing: 1px;
  background: transparent;
  border-top: 2px dashed #fff;
  border-bottom: 2px dashed #fff;
`;

export const Label = styled.p`
  margin: 0;
  padding: 15px 0px;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  color: #fff;
  width: 300px;
  cursor: pointer;
  padding: 15px 0px;
  border: 2px solid #fff;
  background: transparent;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #111;
    background: #fff;
  }
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  text-transform: capitalize;
  background-color: #ff4136;
`;

export const White = styled.div`
  padding: 0;
  width: 100%;
  height: 2px;
  background: #ddd;
  margin: 42px 0px;
`;
