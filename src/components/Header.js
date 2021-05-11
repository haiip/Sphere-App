import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Tooltip } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import SvgIcon from "@material-ui/core/SvgIcon";
import SphereLogo1 from "../components/Bilder/SphereLogo1.png";

function Header() {
  const [user] = useAuthState(auth);

  console.log("user is ", user);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Tooltip
          title={
            <span style={{ fontSize: "15px", color: "#EDF7D2" }}>Profile</span>
          }
          enterDelay={400}
          leaveDelay={50}
        >
          <span>
            <HeaderAvatar
              onClick={() => auth.signOut()}
              alt={user?.displayName}
              src={user?.photoURL}
            />
          </span>
        </Tooltip>
        <Tooltip
          title={
            <span style={{ fontSize: "15px", color: "#EDF7D2" }}>
              Notifications
            </span>
          }
          enterDelay={400}
          leaveDelay={50}
        >
          <NotificationsActiveIcon />
        </Tooltip>
      </HeaderLeft>
      {/* Header search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search for networks" type="text" />
      </HeaderSearch>
      {/* Header right */}
      <HeaderRight>
        <Tooltip
          title={
            <span style={{ fontSize: "15px", color: "#EDF7D2" }}>
              Followers & likes
            </span>
          }
          enterDelay={400}
          leaveDelay={50}
        >
          <FavoriteIcon></FavoriteIcon>
        </Tooltip>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 5px;
  background-color: whitesmoke;
  text-align: center;
  padding: 0 50px;
  color: var(--sphere-color);
  border: 1px var(--sphere-color) solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: black;
    background: -webkit-linear-gradient(var(--sphere-color), #d98695);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--sphere-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > img {
    display: flex;
    margin-bottom: 350px;
    height: 10px;
  }

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    background-color: var(--sphere-color);
    cursor: pointer;
    :hover {
      opacity: 0.8;
      color: #ffbc42;
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
`;

const HeaderRight = styled.div`
  flex: 0.2;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 90px;
    color: #d98695;
    cursor: pointer;
    :hover {
      opacity: 0.8;
      color: #d62828;
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
