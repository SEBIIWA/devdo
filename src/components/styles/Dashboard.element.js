import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

export const Text = styled.code`
  padding: 10px;
  color: #dddddd;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #111111;
`;

export const Linker = styled(Link)`
  color: #dddddd;
`;

export const SettingIcon = styled(FiSettings)`
  padding: 10px;
  color: #dddddd;
  cursor: pointer;
  font-size: 1.5rem;
`;
export const LougOutIcon = styled(FiLogOut)`
  padding: 10px;
  color: #dddddd;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const ErrorMessage = styled.p`
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  text-transform: capitalize;
  background-color: #ff4136;
`;
