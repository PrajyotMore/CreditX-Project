import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Drawer,
  Input,
  Row,
  Select,
  Space,
  Tabs,
} from "antd";
import "./MainTabs.css";
import _ from "lodash";
import { CloseOutlined, UserAddOutlined } from "@ant-design/icons";
import BreadCrumbComp from "../breadcrumb/BreadCrumb";
import person_black from "../../components/Activitity Tracker/icons/person_black.png";
import group_black from "../../components/Activitity Tracker/icons/group_black.png";
import { tab } from "@testing-library/user-event/dist/tab";
import "../actions/CreateTask.css";
// const tabMenu = [

//   {
//     key: "1",
//     label: "All",
//   },
//   {
//     key: "2",
//     label: "For Today",
//   },
//   {
//     key: "3",
//     label: "Open",
//   },
//   {
//     key: "4",
//     label: "Converted",
//   },
//   {
//     key: "5",
//     label: "Failed",
//   },
// ];
// const { TabPane } = Tabs;
const { TabPane } = Tabs;
const TabsComp = ({ tabMenu, header, activeKey, handler, showBreadCrum }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonName) => {
    // Change the background color when the button is clicked
    setActiveButton(buttonName);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const [activeTab, setactiveTab] = useState();

  const TabonChange = (key) => {
    // console.log("ehsan-key===", key);
    setactiveTab(activeKey);
    switch (key) {
      case "1": {
        return navigate("/my-application");
      }
      case "2": {
        return navigate("/fortoday");
      }
      case "3": {
        return navigate("/open");
      }
      case "4": {
        return navigate("/converted");
      }
      case "5": {
        return navigate("/failed");
      }
      case "all": {
        return navigate("/application-listing");
      }
      case "active": {
        return navigate("/mastercontest/active");
      }
      case "completed": {
        return navigate("/mastercontest/completed");
      }
      case "overall": {
        return navigate("/mastercontest/overall");
      }
      default:
        return navigate("/home");
    }
  };

  // ... rest of the component ...

  console.log("active-key=", activeKey);
  let tabPane = [];
  if (tabMenu && !_.isEmpty(tabMenu)) {
    tabPane = _.map(tabMenu, (value) => {
      // console.log("value", value);
      return <TabPane key={value.key} tab={value.label}></TabPane>;
    });
  }

  return (
    <>
      {/* {width > breakpoint ? ( */}
      
      <div className="header-img mainTabsStyle d-none d-md-block">
        <div className="container">
          <div className="">
            {showBreadCrum ? (
              <div className="breadcrumbs">
                <BreadCrumbComp />
              </div>
            ) : null}
            <div className="sales-Header">
              <span>{header}</span>
            </div>
            <div className="tab-section">
              <div className="header_tabs">
                <Tabs
                  onClick={(e) => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                  }}
                  // style={{ marginTop: 20 }}
                  defaultActiveKey={activeKey}
                  onChange={TabonChange}
                  tabBarGutter={20}
                  centered={false}
                  type="card"
                  size="small"
                  activeKey={activeKey}
                  className="main-lead-tabs container px-0"
                >
                  {tabPane}
                </Tabs>
                {/* <button key={"allocket"} className="allocate_btn">
                  <div className="allocate_btn_inner">
                    <UserAddOutlined style={{ color: "#fff" }} /> Allocate To
                  </div>
                </button> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ) : ( */}
     
      <div
        className="tabsStyleMob d-md-none d-block mb-3"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: -14,
        }}
      >
        {/* <div className="mb-3"> */}
        <Tabs
          tabBarGutter={20}
          centered={false}
          onChange={TabonChange}
          size="small"
          activeKey={activeKey}
          style={{
            // backgroundColor: "red",
            boxShadow: "0px 1px 10px 0px #0000003d",
          }}
        >
          {tabPane}
        </Tabs>
        {/* </div> */}
      </div>
      
      {/* )} */}
    </>
  );
};

export default TabsComp;
