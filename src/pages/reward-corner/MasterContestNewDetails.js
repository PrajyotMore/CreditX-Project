import React, { useEffect, useState } from "react";
import TabsComp from "../tabs/Tabs";
import "./ContestNewDetails.css";
import { Card, Tabs } from "antd";

const { TabPane } = Tabs;
const MasterContestNewDetails = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const tabMenu = [
    {
      key: "all",
      label: "All",
    },
    {
      key: "active",
      label: "Active",
    },
    {
      key: "completed",
      label: "Completed",
    },
    {
      key: "overall",
      label: "My Overall Ranking",
    },
  ];

  // const [tabPosition, setTabPosition] = useState("left");

  // const changeTabPosition = (e) => {
  //   console.log("tabPosition==", e);
  //   setTabPosition(e.target.value);
  // };

  return (
    <>
      <TabsComp
        tabMenu={tabMenu}
        activeKey=""
        header="Contest"
        showBreadCrum={true}
      />
      <div className="container">
        <div className="ContestDetailsTabs">
          <Tabs tabPosition={width < breakpoint ? "top" : "left"}>
            <TabPane tab="Details" key="1">
              <Card bordered={false} style={{ borderRadius: "4px" }}>
                <div className="h6 border-bottom pb-2">Digital East</div>
                <ul className="pl-3 text-muted">
                  <li>
                    <strong>Anytime, Anywhere, Paperless login</strong>
                  </li>
                  <li>
                    <strong>Ease in customer on-boarding –</strong>
                    <div>
                      Complete the entire customer on-boarding in just few
                      minutes from anywhere, without the need to travel back to
                      office for login completion
                    </div>
                  </li>
                  <li>
                    <strong> Compatible to any Android device - </strong>
                    <div>
                      {" "}
                      Now use your personal devices like Android mobile or
                      Android tablet.
                    </div>
                  </li>
                  <li>
                    <strong> Offline Capability –</strong>
                    <div>
                      {" "}
                      After BI generation the entire process can be completed
                      even without internet connectivity
                    </div>
                  </li>
                  <li>
                    <strong> CFR notification and upload –</strong>
                    <div>
                      Check for CFR requirements and upload CFR related
                      documents straight from your device
                    </div>
                  </li>
                  <li>
                    <strong> Split payment -</strong>
                    <div>
                      Split the premium into multiple payments of Cheque/DD/Cash
                    </div>
                  </li>
                  <li>
                    <strong>Send link to customer – </strong>
                    <div>
                      Send a link for premium payment to the customer mail ID
                      and the customer can make online payment from his own
                      device
                    </div>
                  </li>
                  <li>
                    <strong>Team Login – </strong>
                    <div>
                      Login upto ZM level, select a FLS/Sales Manager/Advisor
                      from the hierarchy and login a case as the selected sales
                      person
                    </div>
                  </li>
                  <li>
                    <strong> Auto upgrade – </strong>
                    <div>
                      {" "}
                      Login upto ZM level, select a FLS/Sales Manager/Advisor
                      from the hierarchy and login a case as the selected sales
                      person
                    </div>
                  </li>
                </ul>
              </Card>
            </TabPane>
            <TabPane tab="Eligibility" key="2">
              <Card bordered={false} style={{ borderRadius: "4px" }}>
                <div className="h6 border-bottom pb-2">Digital East</div>
                <ul className="pl-3 text-muted">
                  <li>
                    <div>
                      The challenge is applicable from Sales Managers to the
                      Regional Managers
                    </div>
                  </li>
                  <li>
                    <div>
                      The competition will be within the respective category(SM,
                      BM and RM)
                    </div>
                  </li>
                  <li>
                    <div>Login and Issuance Period – June 1st to Jun 30th</div>
                  </li>
                </ul>
              </Card>
            </TabPane>
            <TabPane tab="Rules" key="3">
              <Card bordered={false} style={{ borderRadius: "4px" }}>
                <div className="h6 border-bottom pb-2">Digital East</div>
                <ul className="pl-3 text-muted">
                  <li>
                    <div>
                      In SM category Top 100 of the Zone will be recognized as
                      “The Stars of Digital East”. Min criteria – 2 NOPs
                    </div>
                  </li>
                  <li>
                    <div>
                      In BM category Top 25 of the Zone will be recognized as
                      “The Stars of Digital East” Min criteria – 10 NOPs and 90%
                      Sales Assist app installation by SMs
                    </div>
                  </li>
                  <li>
                    <div>
                      In RM category Top 10 of the Zone will be recognized as
                      “The Stars of Digital East” Min criteria – 50 NOP and 80%
                      Sales Assist app installation by SMs{" "}
                    </div>
                  </li>
                </ul>
              </Card>
            </TabPane>
            <TabPane tab="Rewards" key="4">
              <Card bordered={false} style={{ borderRadius: "4px" }}>
                <div className="h6 border-bottom pb-2">Digital East</div>
                <ul className="pl-3 text-muted">
                  <li>
                    <div>
                      All the Stars of the Digital East to receive an exclusive
                      certificate signed by the Zonal Head and “The Stars of the
                      Digital East” Badge
                    </div>
                  </li>
                  <li>
                    <div>
                      The top 10 SMs, top 5 BMs and top 3 RMS to receive the
                      “The Stars of the Digital East” Trophy along with the
                      certificate and badge
                    </div>
                  </li>
                  <li>
                    <div>
                      The top 5 SMs. Top 2 BMs and the top RM of the Zone to
                      receive the prestigious “The Pride of Digital East”
                      Certificate
                    </div>
                  </li>
                </ul>
              </Card>
            </TabPane>
            <TabPane tab="Extras" key="5">
              <Card bordered={false} style={{ borderRadius: "4px" }}>
                <div className="h6 border-bottom pb-2">Digital East</div>
                <div className="mb-3">
                  A Head to Head between the regions, win the privilege to be
                  the “Pride of Digital East Regions”
                </div>
                <div>
                  Till you unlock your secret Rival, it’s playing blind!!!
                </div>
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MasterContestNewDetails;
