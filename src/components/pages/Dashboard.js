import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import {
  Text,
  Content,
  Wrapper,
  Linker,
  SettingIcon,
  LougOutIcon,
  ErrorMessage
} from "../styles/Dashboard.element";
import Tabing from "./Tabing";

const Dashboard = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("already logged out");
    }
  };

  return (
    <>
      <Wrapper>
        <Content>
          <div>
            <Text>Logged as: {currentUser.email}</Text>
          </div>
          <div>
            <Linker to='/update-profile'>
              <SettingIcon />
            </Linker>
            <LougOutIcon onClick={handleLogout} />
          </div>
        </Content>

        <Tabing />
      </Wrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default Dashboard;
