import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs } from "antd";
import _ from "lodash";
import "./TabsWithoutBtn.css";
import { UserAddOutlined } from "@ant-design/icons";
import BreadCrumbComp from "../breadcrumb/BreadCrumb";
const tabMenu = [
  {
    key: "1",
    label: "TEST",
  },
  {
    key: "2",
    label: "For Today Test",
  },
  {
    key: "3",
    label: "Open Test",
  },
  {
    key: "4",
    label: "Converted Test",
  },
  {
    key: "5",
    label: "Failed Test",
  },
];
const { TabPane } = Tabs;
const TabsWithoutBtn = () => {
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState("1");

  const TabonChange = (key) => {
    const params = useParams();
    console.log("params==", params);
    console.log(key);
    setActiveKey(key);
    if (activeKey) {
      switch (activeKey) {
        case "1": {
          // getDataForOpen("all");
          return navigate("/my-application");
        }
        case "2": {
          // getDataForOpen("fortoday");
          return navigate("/fortoday");
        }
        case "open": {
          // getDataForOpen("open");
          return navigate("/leadMaster/openlead");
        }
        case "converted": {
          // getDataForOpen("converted");
          return navigate("/leadMaster/convertedleads");
        }
        case "failed": {
          // getDataForOpen("failed");
          return navigate("/leadMaster/pendingproposal");
        }

        default:
          return navigate("/home");
      }
    }
  };
  console.log("active-key=", activeKey);
  let tabPane = [];
  if (tabMenu && !_.isEmpty(tabMenu)) {
    tabPane = _.map(tabMenu, (value, id) => {
      // console.log("value", value);
      return <TabPane key={value.id} tab={value.value}></TabPane>;
    });
  }

  return (
    <>
      <div className="header-img mainTabsStyle2">
        <div className="container">
          <div className="px-2">
            <div className="sales-Header">
              <p>Presales Tools</p>
            </div>
            <div className="breadcrum">
              <BreadCrumbComp />
            </div>
            <div className="tab_section">
              <div className="header_tabs_normal">
                <Tabs
                  style={{ marginTop: 20 }}
                  // defaultActiveKey={activeKey}
                  items={tabMenu}
                  onChange={TabonChange}
                  tabBarGutter={20}
                  centered={false}
                  type="card"
                  size="small"
                  activeKey={activeKey}
                  className="main_lead_tab"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsWithoutBtn;
