import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/apiCalls";
import { Link } from "react-router-dom";

export default function Topbar() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/">
            <span className="logo">YAZadmin</span>
          </Link>
        </div>
        <div className="topRight">
          <span
            onClick={handleLogout}
            style={{
              marginRight: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </span>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
