import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TabsComp from "../tabs/Tabs";
import MasterContestActive from "./MasterContestActive";
import MasterContestCompleted from "./MasterContestCompleted";
import { FileDoneOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Col, Pagination, Progress, Row } from "antd";
import "./ApplicationListing.css";
const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
};
const MasterContest = () => {
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState("1");
  const tabMenu = [
    {
      key: "all",
      label: "All",
    },
    {
      key: "inprogress",
      label: "In Progress",
    },
    {
      key: "sanctioned",
      label: "Sanctioned",
    },
    {
      key: "disbursed",
      label: "Disbursed",
    },
    {
      key: "rejected",
      label: "Rejected",
    },
  ];

  return (
    <>
      {/* {activeKey === "1" ? ( */}
      <TabsComp
        tabMenu={tabMenu}
        // onTabClick={TabonChange}
        activeKey="all"
        header="Contest"
        showBreadCrum={true}
      />
      <div className="container">
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          {Array(8)
            .fill()
            .map((el, index) => (
              <Col
                key={index}
                className="m-auto"
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                // className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4"
              >
                <div className="loan-app-card">
                  <div className="loan-app-card-header">
                    <div className="header-info">
                      <div className="avatar">RM</div>
                      <div className="userinfo">
                        <div className="username">Rahul Mane</div>
                        <div className="userid">ID2665754320</div>
                      </div>
                    </div>

                    <div className="header-actions">
                      <Button className="document-pending">
                        Document Pending
                      </Button>
                      <MoreOutlined />
                    </div>
                  </div>
                  <div className="application-info">
                    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]} style={{width:'100%'}}>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div className="col1">
                          <div>
                            <div className="title1">20,00,000</div>
                            <div className="title2">Loan Amount</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div className="col1">
                        <div>
                          <div className="title1">12 Months</div>
                          <div className="title2">Tenure</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div className="col1">
                          <div>
                            <div className="title1">Home Loan</div>
                            <div className="title2">Purpose of Loan</div>
                          </div>

                          
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div>
                            <div className="title1">45012</div>
                            <div className="title2">EMI</div>
                          </div>
                      </Col>
                     
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div>
                            <div className="title1">Dadar</div>
                            <div className="title2">Location</div>
                          </div>
                      </Col>
                      
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div>
                            <div className="title1">12/06/24</div>
                            <div className="title2">Application Date</div>
                          </div>
                      </Col>
                    </Row>
                  </div>
                  <Button className="button">Update</Button>
                </div>
              </Col>
            ))}
        </Row>
        <div className="pagination">
          <div className="pagination-info">
            Showing 8 Out of 244 Applications
          </div>
          <Pagination className="pages" total={23} itemRender={itemRender} />
        </div>
      </div>
      {/* ) : activeKey === "2" ? ( */}
      {/* <MasterContestActive />
      ) : activeKey === "3" ? (
        <MasterContestCompleted />
      ) : null} */}
    </>
  );
};

export default MasterContest;
