import React from "react";
import Appbar from "../Appbar/Appbar/Appbar";
import RFIDContent from "./RFIDContent/RFIDContent";
import blueEmail from "../../assets/icons/blue-emailIcon.svg";
import blueBell from "../../assets/icons/blueBellIcon.svg";
import blueMenu from "../../assets/parkAddaImages/blueMenuBarIcon.svg";

export default function RFID() {
  return (
    <div>
      <Appbar
        bgcolor="white"
        color="black"
        shadow="5px 0px white"
        emailIcon={blueEmail}
        bellIcon={blueBell}
        menuIcon={blueMenu}
        profileTextColor="#FFC738"
        style={{ boxShadow: "none", borderRadius: "none" }}
        style1={{
          backgroundColor: "white",
          border: "none",
          color: "#FFC738",
          borderRadius: "none",
          padding: "10px"
        }}
        page={<RFIDContent />}
      />
    </div>
  );
}
