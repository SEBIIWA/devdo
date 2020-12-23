import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

export const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Fetched = styled.div`
  display: flex;
  width: 550px;
  padding: 15px;
  margin: 15px 0px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  background: #eeeeee;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Div = styled.div`
  width: 95%;
`;

export const Text = styled.p`
  margin: 0;
  color: #232323;
  font-size: 1.3rem;
`;

export const Disc = styled.p`
  margin: 0;
  color: #232323;
  font-size: 0.9rem;
  width: 95%;
  overflow-wrap: break-word;
`;

export const Delete = styled(AiOutlineDelete)`
  color: #232323;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #ff4136;
    font-size: 140%;
  }
`;
