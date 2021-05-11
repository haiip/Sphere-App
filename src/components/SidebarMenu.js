import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase";

function SidebarMenu({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Enter Channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SidebarMenuContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && (
        <Icon fontSize="small" style={{ padding: 10, fontSize: "10px" }} />
      )}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarMenuChannel>
          <span></span> {title}
        </SidebarMenuChannel>
      )}
    </SidebarMenuContainer>
  );
}

export default SidebarMenu;

const SidebarMenuContainer = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;
  padding: 2px;
  cursor: pointer;

  :hover {
    background-color: #ec657e;
  }

  > h3 {
    font-weight: 450;
  }
  > h3 > span {
  }
`;

const SidebarMenuChannel = styled.h3`
  padding: 30px 0;
  font-size: 30px;
`;
