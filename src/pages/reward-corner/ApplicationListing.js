import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TabsComp from "../tabs/Tabs";
import MasterContestActive from "./MasterContestActive";
import MasterContestCompleted from "./MasterContestCompleted";
import { FileDoneOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Col, Pagination, Progress, Row } from "antd";
import moreOptions from "../../assets/image/kebab menu.svg"
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

  const ListData = [
    {
    avatar:"RM",
    userName: "Rahul Mane",
    userId: "ID2665754320",
    status: "Document Pending",
    loanValue: "20,00,000",
    tenureMonths: "12 Months",
    loanType: "Home Loan",
    emi:"45012",
    location: "Dadar",
    applicationDate:"12/06/24",
    boxShadow: "0px 4px 6px rgba(255, 107, 0, 0.12)",
    color: "#ff6b00", // Add color property
    backgroundColor: "rgba(255, 107, 0, 0.16)", // Add backgroundColor property
    border: "1px solid #ff6b00"
  },
  {
    avatar:"SS",
    userName: "Sanika Samarth",
    userId: "ID2665754320",
    status: "Sanctioned",
    loanValue: "20,00,000",
    tenureMonths: "12 Months",
    loanType: "Home Loan",
    emi:"45012",
    location: "Dadar",
    applicationDate:"12/06/24",
    color: "#12b82c", // Add color property
    boxShadow: "0px 4px 6px rgba(34, 187, 51, 0.12)",
    backgroundColor: "rgba(18, 184, 44, 0.16)", // Add backgroundColor property
    border: "1px solid #12b82c"

  },
  {
    avatar:"SC",
    userName: "Surbhi Chaple",
    userId: "ID2665754320",
    status: "Not Eligible",
    loanValue: "40,00,000",
    tenureMonths: "18 Months",
    loanType: "Business Loan",
    emi:"25010",
    location: "Thane",
    applicationDate:"02/10/23",
    boxShadow: "0px 4px 6px rgba(227, 66, 52, 0.12)",
    color: "#e34234",
    backgroundColor: "rgba(227, 66, 52, 0.16)",
    border: "1px solid #e34234"

  },
  {
    avatar:"SM",
    userName: "Sandeep Mantri",
    userId: "ID8975754546",
    status: "Disbursed",
    loanValue: "20,00,000",
    tenureMonths: "24 Months",
    loanType: "Vehicle  Loan",
    emi:"182500",
    location: "Bandra",
    applicationDate:"15/05/23",
    boxShadow: "0px 4px 6px rgba(40, 177, 255, 0.12)",
    color: "#28b1ff", // Add color property
    backgroundColor: "rgba(18, 184, 44, 0.16)", // Add backgroundColor property
    border: "1px solid #28b1ff"

  },
  {
    avatar:"SR",
    userName: "Sameer Raghuvanshi",
    userId: "ID1245754997",
    status: "Disbursed",
    loanValue: "50,00,000",
    tenureMonths: "12 Months",
    loanType: "Home  Loan",
    emi:"50800",
    location: "Powai",
    applicationDate:"21/06/23",
    boxShadow: "0px 4px 6px rgba(40, 177, 255, 0.12)",
    color: "#28b1ff", // Add color property
    backgroundColor: "rgba(18, 184, 44, 0.16)", // Add backgroundColor property
    border: "1px solid #28b1ff"

  },
  {
    avatar:"SD",
    userName: "Saniya Daman",
    userId: "ID6985754426",
    status:"Rejected",
    loanValue: "35,00,000",
    tenureMonths: "24 Months",
    loanType: "Education Loan",
    emi:"40600",
    location: "Sion",
    applicationDate:"05/09/23",
    boxShadow: "0px 4px 6px rgba(227, 66, 52, 0.12)",
    color: "#e34234",
    backgroundColor: "rgba(227, 66, 52, 0.16)",
    border: "1px solid #e34234"

  },
  {
    avatar:"DT",
    userName: "Dipti Trivedhi",
    userId:"ID8855754311",
    status: "Rejected",
    loanValue: "25,00,000",
    tenureMonths: "18 Months",
    loanType: "Vehicle Loan",
    emi:"40707",
    location: "Worli",
    applicationDate:"12/06/24",
    boxShadow: "0px 4px 6px rgba(255, 107, 0, 0.12)",
    color: "#ff6b00", // Add color property
    backgroundColor: "rgba(255, 107, 0, 0.16)", // Add backgroundColor property
    border: "1px solid #ff6b00",


  },
  {
    avatar:"RR",
    userName: "Ratan Ramani",
    userId:"ID7985754399",
    status: "Sanctioned",
    loanValue: "36,00,000",
    tenureMonths: "28 Months",
    loanType: "Home Loan",
    emi:"80200",
    location: "Kurla",
    applicationDate:"12/06/24",
    color: "#12b82c", // Add color property
    boxShadow: "0px 4px 6px rgba(34, 187, 51, 0.12)",
    backgroundColor: "rgba(18, 184, 44, 0.16)", // Add backgroundColor property
    border: "1px solid #12b82c"

  }
]



  return (
    <>
      {/* {activeKey === "1" ? ( */}
      <TabsComp
        tabMenu={tabMenu}
        // onTabClick={TabonChange}
        activeKey="all"
        header="Loan Application"
        showBreadCrum={true}
      />
      <div className="container top_container">
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          {ListData
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
                      <div className="avatar">{el.avatar}</div>
                      <div className="userinfo">
                        <div className="username">{el.userName}</div>
                        <div className="userid">{el.userId}</div>
                      </div>
                    </div>

                    <div className="header-actions">
                      <Button  style={{
                        boxShadow: el.boxShadow,
                        border: el.border,
                        color: el.color,
                        backgroundColor: el.backgroundColor,
                      }}
                      className="document-pending">
                        {el.status}
                      </Button>
                      <img src={moreOptions}/>
                    </div>
                  </div>
                  <div className="application-info">
                    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]} style={{width:'100%'}}>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div className="col1">
                          <div>
                            <div className="title1">{el.loanValue}</div>
                            <div className="title2">Loan Amount</div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div className="col1">
                        <div>
                          <div className="title1">{el.tenureMonths}</div>
                          <div className="title2">Tenure</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                        <div className="col1">
                          <div>
                            <div className="title1">{el.loanType}</div>
                            <div className="title2">Purpose of Loan</div>
                          </div>

                          
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div>
                            <div className="title1">{el.emi}</div>
                            <div className="title2">EMI</div>
                          </div>
                      </Col>
                     
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div>
                            <div className="title1">{el.location}</div>
                            <div className="title2">Location</div>
                          </div>
                      </Col>
                      
                      <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                      <div>
                            <div className="title1">{el.applicationDate}</div>
                            <div className="title2">Application Date</div>
                          </div>
                      </Col>
                    </Row>
                  </div>
                  <Button className="button" onClick={()=> navigate("/Application-Listing/Application")}>Update</Button>
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
