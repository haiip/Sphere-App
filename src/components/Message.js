import React from "react";
import styled from "styled-components";
import hover from "../components/cssEffects/hover.css";

function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user}
          {""}
          <span class="hvr-grow">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 60px;
    border-radius: 50px;
    border: 2px solid black;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: gray;
    font-weight: 500;
    margin-left: 17px;
    font-size: 10px;
  }
`;
