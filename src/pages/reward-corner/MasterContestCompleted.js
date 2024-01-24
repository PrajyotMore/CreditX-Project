import { Button, Card, Col, Row } from "antd";
import React from "react";
import { FileDoneOutlined } from "@ant-design/icons";
import "./MasterContestCompleted.css";
import TabsComp from "../tabs/Tabs";
import { Link } from "react-router-dom";
const MasterContestCompleted = () => {
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
  return (
    <>
      <TabsComp
        tabMenu={tabMenu}
        // onTabClick={TabonChange}
        activeKey="completed"
        header="Contest"
        showBreadCrum={true}
      />
      <div className="container">
        <Row gutter={{ xs: 8, sm: 16, md: 16, lg: 16 }}>
          <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: 16 }}>
            <Card>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  borderBottom: "1px solid #ccc",
                  marginBottom: 10,
                  paddingBottom: 6,
                }}
              >
                All Completed Contests
              </div>
              <div className="mobile_flex ">
                <div className="text_div">
                  <p className="mb-0">
                    Contest Number 2 ( 20th May to 20th June )
                  </p>
                  <p className="mb-0">Results announced: 25/06/2016</p>
                </div>
                <div className="button">
                  <Link to="/mastercontest/joinclub">
                    <Button className="secondary_button" type="secondary">
                      <FileDoneOutlined />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} style={{ marginBottom: 16 }}>
            <Card>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  borderBottom: "1px solid #ccc",
                  marginBottom: 10,
                  paddingBottom: 6,
                }}
              >
                All Completed Contests
              </div>
              <div className="mobile_flex ">
                <div className="text_div">
                  <p className="mb-0">
                    Contest Number 2 ( 20th May to 20th June )
                  </p>
                  <p className="mb-0">Results announced: 25/06/2016</p>
                </div>
                <div className="button">
                  <Button className="secondary_button" type="secondary">
                    <FileDoneOutlined />
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MasterContestCompleted;
