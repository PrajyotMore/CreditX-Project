import { Card } from "antd";
import React, { useState } from "react";
import TabsComp from "../tabs/Tabs";
import TabsWithoutBtn from "../tabs/TabsWithoutBtn";
import ForToday from "./ForToday";
import Open from "./Open";
// import "../tabs/MainTabs.css";
// import "../tabs/TabsWithoutBtn.css";

const Myapplication = () => {
  const [tabWithBtn, setTabWithBtn] = useState(true);
  const [activeKey, setActiveKey] = useState("1");
  const tabMenu = [
    {
      key: "1",
      label: "All",
    },
    {
      key: "2",
      label: "For Today",
    },
    {
      key: "3",
      label: "Open",
    },
    {
      key: "4",
      label: "Converted",
    },
    {
      key: "5",
      label: "Failed",
    },
  ];
  const TabonChange = (key) => {
    console.log("key===", key);
    setActiveKey(key);
    // switch (key) {
    //   case "1": {
    //     return navigate("/all");
    //   }
    //   case "2": {
    //     return navigate("/mastercontest/active");
    //   }
    //   case "3": {
    //     return navigate("/mastercontest/completed");
    //   }
    //   default:
    //     return navigate("/home");
    // }
  };
  return (
    <>
      {tabWithBtn ? (
        <TabsComp
          tabMenu={tabMenu}
          handler={TabonChange}
          activeKey={activeKey}
          header="My Activity"
          showBreadCrum={true}
        />
      ) : (
        <TabsWithoutBtn tabMenu={tabMenu} />
      )}

      {activeKey === "1" ? (
        <div className="container">
          <div className="row">
            {Array(6)
              .fill()
              .map((el, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4"
                >
                  <div className="card">
                    <div className="card-body">
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : activeKey === "2" ? (
        <ForToday />
      ) : activeKey === "3" ? (
        <Open />
      ) : null}
    </>
  );
};

export default Myapplication;
