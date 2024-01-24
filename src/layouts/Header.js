import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import "./header.css";
import { BellOutlined, SearchOutlined, DownOutlined } from "@ant-design/icons";
import { Input, Menu, Modal } from "antd";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SdWidget from "../pages/widget/Sdwidget";
import logocreditX from "../../src/assets/Group 427318814.svg"
//modal1 component
function Modal1({ children, shown, close }) {
  return shown ? (
    <div className="modal-backdrop" onClick={() => close()}>
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}

const Header = ({ callback }) => {

  // const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [showLanguageSelector, setshowLanguageSelector] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showbellIcon] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [notificationPanel, setNotificationPanel] = useState(false);

  const handleLanguage = (e) => {
    console.log("language======", e.target.value);
    setSelectedLanguage(e.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setSidebar(true);
  };
  const showNotificationModal = () => {
    setNotificationPanel(true);
  };
  const handleOk = () => {
    setSidebar(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSidebar(false);
  };
  const items = [
    { key: 1, value: "My Customer" },
    { key: 2, value: "My Application" },
    { key: 3, value: "Tour" },
  ];
  // const navigateLogo = () => {
  //  navigate("/dashboard");
  // }
  return (
    <>
      <div className="header">
        <div className="header_wrapper">
          <div className="logo_section  ">
            {/* <FaIcons.FaBars
              className="header_hamburger"
              onClick={callback}
              size={24}
            /> */}
            {showLogo && (
              <Link to="/">
                <img
                  className="brand_logo"
                  src={logocreditX}
                  alt="CreditX Logo"
                 // onClick={navigateLogo}
                />
              </Link>
            )} 
          </div>
          <div
            className="profile_wrapper"
            // style={{
            //   display: "flex",
            //   justifyContent: "flex-end",
            //   alignItems: "center",
            //   gap: "16px",
            // }}
          >
           {/* <div className="position-relative d-flex align-items-center">
              {showSearch ? (
                <Input className="search_inputbox" placeholder="Search" />
              ) : null}
              <SearchOutlined
                className="search_icon"
                style={{
                  fontSize: "25px",
                  color: "#fff",
                  cursor: "pointer",
                  backgroundColor: "rgb(17 16 16)",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  right: 0,
                  zIndex: 1,
                }}
                onClick={() => setShowSearch(!showSearch)}
              />
              </div> */}

            {showLanguageSelector ? (
              <div className="select_language_mode">
                <select
                  defaultValue={selectedLanguage}
                  className="languageSelctor"
                  onChange={handleLanguage}
                >
                  <option value="EN">EN</option>
                  <option value="TH">TH</option>
                </select>
              </div>
            ) : null}
            <div
              className="divider"
              style={{
                width: "1px",
                borderRight: "1px solid rgba(255, 255, 255, 0.20)",
                height: "34px",
              }}
            ></div>
            {showbellIcon ? (
              <div
                className="bell_notification"
                style={{ position: "relative" }}
                to="#"
              >
                <BellOutlined
                  onClick={showNotificationModal}
                  style={{ fontSize: "25px", color: "#fff", cursor: "pointer" }}
                />
              </div>
            ) : null}
            <div
              className="divider"
              style={{
                width: "1px",
                borderRight: "1px solid rgba(255, 255, 255, 0.20)",
                height: "34px",
              }}
            ></div>
            <div
              className="user_profile ms-md-3 d-flex align-items-center"
              to="#"
              onClick={showModal}
            >
              {/* <FaIcons.FaUserCircle
              style={{ width: 30, height: 30 }}
              onClick={showModal}
            /> */}
              <img
                className="profile_img"
                src="./profile_img.png"
                alt="profile"
              />
              <div className="profile-content d-none d-md-block">
                <div className="content">
                  <div className="text-wrapper">Rajat Mishra</div>
                  <div className="div">Agent ID: 1234567890</div>
                </div>
                <DownOutlined className="chevron-down" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal1 shown={sidebar} close={() => setSidebar(false)}>
        <div className="indicationArrowProfile"></div>
        <div className="sideMenu">
          <div className="menuHeader">
            <div className="profileData">
              <p style={{ textTransform: "capitalize", fontWeight: 600 }}>
                USER : user1
              </p>
              <p>
                <b>CUSTOMER ID :</b> 2321
              </p>
            </div>
          </div>
          <div className="menuBody">
            <Menu
              // onClick={onClick}
              style={{
                width: 255,
              }}
              mode="inline"
            >
              {items.map((item) => (
                <Menu.Item key={item.key}>{item.value}</Menu.Item>
              ))}
            </Menu>
            <div className="logoutContainer">
              <button>Logout</button>
            </div>
          </div>
        </div>
      </Modal1>
      {/* notification modal */}
      <Modal1
        shown={notificationPanel}
        close={() => setNotificationPanel(false)}
      >
        <div className="indicationArrowNotify"></div>
        <div className="sideMenu">
          <div className="menuHeader">
            <div className="profileData">Notification Panel</div>
          </div>
          <div className="menuBody">
            <div className="logoutContainer">
              <button>view all </button>
            </div>
          </div>
        </div>
      </Modal1>
    </>
  );
};

export default Header;
