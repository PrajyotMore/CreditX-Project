import React, { useState } from "react";
import TabsComp from "../tabs/Tabs";

const ForToday = () => {
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
  // const TabonChange = (key) => {
  //   // handler(key);
  //   console.log("ehsan-key===", key);
  //   setActiveKeys(key);
  //   switch (key) {
  //     case "1": {
  //       return navigate("/my-application");
  //     }
  //     case "2": {
  //       return navigate("/fortoday");
  //     }
  //     case "3": {
  //       return navigate("/open");
  //     }
  //     case "converted": {
  //       return navigate("/converted");
  //     }
  //     case "failed": {
  //       return navigate("/failed");
  //     }
  //     default:
  //       return navigate("/home");
  //   }
  // };
  return (
    <>
      <TabsComp
        showBreadCrum={true}
        header="My Activity"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
        // style={{ marginTop: 20 }}
        // defaultActiveKey={activeKeys}
        tabMenu={tabMenu}
        tabBarGutter={20}
        centered={false}
        type="card"
        size="small"
        activeKey="2"
        className="main-lead-tabs"
      />
      <div className="container">
        <div className="row">
          {Array(4)
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
    </>
  );
};

export default ForToday;
