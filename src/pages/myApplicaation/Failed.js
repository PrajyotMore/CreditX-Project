import React from "react";
import TabsComp from "../tabs/Tabs";

const Failed = () => {
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
  return (
    <>
      <TabsComp
        showBreadCrum={true}
        header="My Activity"
        tabMenu={tabMenu}
        activeKey="5"
      />
      <div className="container">
        <div className="row">
          {Array(2)
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
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Failed;
