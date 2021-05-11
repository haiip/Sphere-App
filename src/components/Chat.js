import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import { useSelector } from "react-redux";
import ChatWindow from "./ChatWindow";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "../components/Message";
import SphereTest from "../components/Bilder/SphereTest.png";

function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  console.log(roomDetails);
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
              </h4>

              <img src={SphereTest} alt="img" />
            </HeaderLeft>

            <HeaderRight>
              <p>
                <DetailsRoundedIcon /> details
              </p>
            </HeaderRight>
          </Header>

          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              );
            })}
            <ChatScroll ref={chatRef} />
          </ChatMessages>
          <ChatWindow
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            roomId={roomId}
          />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;

const ChatScroll = styled.div`
  padding-bottom: 200px;
`;

const Header = styled.div`
  display: flex;
  position: relative;

  justify-content: space-between;
  padding: 20px;
  border-bottom: 2px solid var(--sphere-color);
  -webkit-box-shadow: 0px 2px 1px black;
  -moz-box-shadow: 0px 2px 1px black;
  box-shadow: 0px 1px 3px black;

  > header > img {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: clamp(100px, 100%, 700px);
    padding-bottom: 10px;
  }
`;

const ChatMessages = styled.div``;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    display: flex;
    padding-left: 550px;
    margin-left: auto;
    margin-right: auto;
    width: clamp(100px, 90%, 300px);
    padding-bottom: 10px;
  }

  > h4 {
    display: flex;
    text-transform: uppercase;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin-left: 10px;
    font-size: 30px;
    width: clamp(100px, 90%, 300px);
  }
  > h4 > .MuiSvgIcon-root {
    font-size: 30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    color: #ffbc42;
    width: clamp(100px, 90%, 300px);
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 30px;
    width: clamp(100px, 90%, 300px);
  }
  > p > .MuiSvgIcon-root {
    margin-right: 10px !important;
    font-size: 30px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 70px;
  width: clamp(100px, 90%, 300px);
`;
