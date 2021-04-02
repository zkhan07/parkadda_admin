import React from "react";
import Content from "./DashboardContent/DashboardContent";
import Appbar from "../Appbar/Appbar/Appbar";
import whiteEmail from "../../assets/icons/emailIcon.svg";
import whiteBell from "../../assets/icons/whiteBellIcon.svg";
import whiteMenu from "../../assets/parkAddaImages/whiteMenuBarIcon.svg";

export default function Dashboard(props) {
  return (
    <div>
      <Appbar
        bgcolor="#1D2B44"
        shadow="5px 0px #1D2B44"
        emailIcon={whiteEmail}
        bellIcon={whiteBell}
        menuIcon={whiteMenu}
        profileTextColor="#FFC738"
        style={{ boxShadow: "none", borderRadius: "none" }}
        style1={{
          backgroundColor: "#1D2B44",
          border: "none",
          color: "#FFC738",
          borderRadius: "none",
          padding: "10px"
        }}
        page={<Content />}
      />
    </div>
  );
}
