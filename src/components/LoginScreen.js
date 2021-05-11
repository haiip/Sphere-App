import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import SphereShadow4 from "../components/Bilder/SphereShadow4.png";
import GoogleIcon from "../components/Bilder/GoogleIcon.png";
import { auth, provider } from "../firebase";
import SvgIcon from "@material-ui/core/SvgIcon";
import Particles from "react-particles-js";
import particlesConfig from "../Config/particle-config";

function LoginScreen() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <ParticleDiv>
        <Particles params={particlesConfig} />
      </ParticleDiv>
      <LoginInnerContainer>
        <img src={SphereShadow4} alt="" />
        <p>
          {" "}
          Welcome to Sphere your all in one application for socialmedia
          interaction and workspace{" "}
        </p>

        <h1>Sign in to Sphere</h1>
        <Button type="submit" onClick={signIn} Icon={GoogleIcon}>
          Sign in with Google
          <SvgIcon style={{ marginLeft: "5px", color: "" }}>
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
          </SvgIcon>
        </Button>
        <p>or</p>
        <p>
          Create a Google account{" "}
          <a
            href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"
            target="_blank"
            rel="noreferrer"
          >
            Here
          </a>
        </p>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default LoginScreen;

const LoginContainer = styled.div`
  z-index: 1;
  background-image: linear-gradient(
    to right,
    #d1edeb,
    #a3dcd7,
    #75cac4,
    #fcaf3f,
    #e73959,
    #ec657e,
    #f9d3da
  );
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;
`;
const ParticleDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const LoginInnerContainer = styled.div`
  z-index: 2;
  text-align: center;
  margin-bottom: 100px;
  width: clamp(500px, 100%, 700px);
  height: clamp(500px, 100%, 700px);
  background-color: ivory;
  border-radius: clamp(600px, 100%, 100px);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.25), 0 4px 9px rgba(0, 0, 0, 0.9);

  > img {
    display: flex;

    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: clamp(100px, 100%, 700px);
    padding-bottom: 10px;
  }

  > h1 {
    font-size: clamp(1.8rem, 2.5vw, 2.8rem);
    background-image: linear-gradient(
      to right,
      #d1edeb,
      #a3dcd7,
      #75cac4,
      #fcaf3f,
      #e73959,
      #ec657e,
      #f9d3da
    );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-stroke: 1px black;
  }

  > button {
    background-image: linear-gradient(
      to right,
      #d1edeb,
      #a3dcd7,
      #75cac4,
      #fcaf3f,
      #e73959,
      #ec657e,
      #f9d3da
    );
  }
  > button {
    width: clamp(10px, 60%, 700px);
    height: clamp(10px, 60%, 50px);

    font-family: monospace;
    margin-top: 50px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #000000;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
  }

  > button:hover {
    background-position: right center; /* byt sida på färgen */
    color: #fff;
    text-decoration: none;
  }
`;
