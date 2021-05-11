import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, db } from "../firebase";
import React, { useState } from "react";
import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatWindow({ channelName, roomId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault(); // laddar ej om sidan när du skickar ett meddelande

    if (!roomId) {
      return false;
    }

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatWindowContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Send Message in: ${channelName}`}
        />

        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatWindowContainer>
  );
}

export default ChatWindow;

const ChatWindowContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 0.5px;
    width: 60%;
    border: 1.5px solid gray;
    border-radius: 4px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
