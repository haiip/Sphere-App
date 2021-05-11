import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import styled from "styled-components";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import LoginScreen from "./components/LoginScreen";
import SphereShadow from "./components/Bilder/SphereShadow.png";
import Spinner from "react-spinkit";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <LoadingScreen>
        <LoadingContent>
          <img src={SphereShadow} alt="" />

          <Spinner
            name="ball-zig-zag"
            style={{ marginLeft: 10 }}
            color="#d1edeb"
            fadeIn="none"
          />
          <Spinner
            name="ball-zig-zag-deflect"
            style={{ marginLeft: 20 }}
            color="#a3dcd7"
            fadeIn="none"
          />
          <Spinner
            name="ball-zig-zag"
            style={{ marginLeft: 30 }}
            color="#75cac4"
            fadeIn="none"
          />
          <Spinner
            name="ball-zig-zag-deflect"
            style={{ marginLeft: 40 }}
            color="#fcaf3f"
            fadeIn="none"
          />
          <Spinner
            name="ball-zig-zag"
            style={{ marginLeft: 50 }}
            color="#e73959"
            fadeIn="none"
          />
          <Spinner
            name="ball-zig-zag-deflect"
            style={{ marginLeft: 60 }}
            color="#ec657e"
            fadeIn="none"
          />
          <Spinner
            name="ball-zig-zag"
            style={{ marginLeft: 70 }}
            color=" #f9d3da"
            fadeIn="none"
          />
        </LoadingContent>
      </LoadingScreen>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <>
            <Header />

            <AppScreen>
              <Sidebar />

              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppScreen>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const LoadingScreen = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > spinner {
    // lös ccs för spinner //
  }
`;

const LoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -200px;

  > img {
    display: block;
    width: clamp(200px, 100%, 600);
    line-height: 100;
  }
`;

const AppScreen = styled.div`
  display: flex;
  height: 100vh;
`;
