import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarMenu from "./SidebarMenu";
import ForumIcon from "@material-ui/icons/Forum";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SettingsIcon from "@material-ui/icons/Settings";
import SphereShadow1 from "../components/Bilder/SphereShadow1.png";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import { Divider, Tooltip } from "@material-ui/core";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarChannel>
          <h2> Online as </h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarChannel>
      </SidebarHeader>

      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Live presentations & interactions
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu Icon={LiveTvIcon} title="Live feed" />
        </span>
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Look & search for channels
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu Icon={BubbleChartIcon} title="Channels" />
        </span>
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Recent forum posts
          </span>
        }
        enterDelay={500}
        leaveDelay={200}
      >
        <span>
          <SidebarMenu Icon={ForumIcon} title="Forums" />
        </span>
      </Tooltip>

      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Work colleages & contactlist
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu Icon={PeopleAltIcon} title="Contacts" />
        </span>
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Browse applications
          </span>
        }
        enterDelay={500}
        leaveDelay={200}
      >
        <span>
          <SidebarMenu Icon={AppsIcon} title="Apps" />
        </span>
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Make new bookmarks or visit your saved ones
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu Icon={BookmarksIcon} title="Bookmarks" />
        </span>
      </Tooltip>
      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Show recent calendar acitvties
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu Icon={CalendarTodayIcon} title="Calendar" />
        </span>
      </Tooltip>

      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Edit your settings or change social area
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu Icon={SettingsIcon} title="Settings" />
        </span>
      </Tooltip>

      <Divider />
      <Tooltip
        title={
          <span style={{ fontSize: "15px", color: "#cbebe9" }}>
            Add a new Channel
          </span>
        }
        enterDelay={400}
        leaveDelay={50}
      >
        <span>
          <SidebarMenu
            Icon={AddBoxIcon}
            addChannelOption
            title="Create Channel"
          />
        </span>
      </Tooltip>
      {channels?.docs.map((doc) => (
        <SidebarMenu
          Icon={DynamicFeedIcon}
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}

      <SidebarBottom>
        <span>
          <img src={SphereShadow1} alt="img" />
        </span>
      </SidebarBottom>
    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--sphere-color);
  flex: 0.1;
  border-top: 1px solid var(sphere-color);
  max-width: 260px;
  margin-top: 60px;

  > .MuiDivider-root {
    margin-top: 5px;
    margin-bottom: 5px;
    border-top: 1px solid whitesmoke;
    border-width: 1px;
    border-style: discrete;
  }
  img {
    display: flex;
    size: 20px;
    margin-left: auto;
    margin-right: auto;
    width: clamp(30px, 100%, 700px);
    padding-top: clamp(10px, 100%, 165px);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 20px dotted -webkit-gradient(linear, left top, right top, color-stop(0%, hsla(0, 0%, 0%, 0)), color-stop(50%, hsla(0, 0%, 0%, 0.75)), color-stop(100%, hsla(0, 0%, 0%, 0)));
  background: -webkit-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: -moz-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: -ms-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: -o-linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  background: linear-gradient(
    left,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 0.75) 50%,
    hsla(0, 0%, 0%, 0) 100%
  );
  padding-bottom: 10px;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 2px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const SidebarChannel = styled.div`
  flex: 1;

  > h2 {
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 15px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: #afe313;
  }
`;

const SidebarBottom = styled.div`
  > SidebarBottom > span > &.img {
    display: flex;
    size: 20px;
    margin-left: auto;
    margin-right: auto;
    width: clamp(100px, 100%, 700px);
    padding-bottom: 900px;
  }
`;
