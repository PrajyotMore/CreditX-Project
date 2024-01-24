import { Button, Card, Collapse, Progress, Space, Table } from "antd";
import React, { useState } from "react";
import "./ActiveContest.css";
import { Link } from "react-router-dom";
import { FileDoneOutlined } from "@ant-design/icons";
import TabsComp from "../tabs/Tabs";

const { Panel } = Collapse;

const MasterContestActive = () => {
  const [activeKey, setActiveKey] = useState(1);
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

  const dataSource = [
    {
      key: "1",
      name: "Sagar Sonawane",
      position: "1st",
      score: 1827,
      login: 1600,
      issuance: 1534,
      stats_login: 25,
      stats_issurance: 50,
    },
    {
      key: "2",
      name: "Gaurav Sane",
      position: "2st",
      score: 1827,
      login: 1600,
      issuance: 1534,
      stats_login: 15,
      stats_issurance: 30,
    },
    {
      key: "3",
      name: "Praful Shinde",
      position: "3rd",
      score: 1827,
      login: 1600,
      issuance: 1534,
      stats_login: 40,
      stats_issurance: 70,
    },
    {
      key: "4",
      name: "Abhang Pathak",
      position: "4th",
      score: 1827,
      login: 1600,
      issuance: 1534,
      stats_login: 30,
      stats_issurance: 60,
    },
    {
      key: "5",
      name: "Jagdish Sisode",
      position: "5th",
      score: 1827,
      login: 1600,
      issuance: 1534,
      stats_login: 60,
      stats_issurance: 80,
    },
  ];

  const columns = [
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Stats",
      dataIndex: "stats",
      key: "stats",
      // width: 200,
      render: (text, record) => (
        <div className="d-flex flex-column">
          <Progress
            className="w-100"
            strokeWidth={15}
            strokeColor={"#ffc900"}
            strokeLinecap="butt"
            percent={record.stats_login}
            showInfo={false}
          />
          <Progress
            strokeWidth={15}
            strokeColor={"#ffc900"}
            strokeLinecap="butt"
            percent={record.stats_issurance}
            showInfo={false}
          />
        </div>
      ),
      // responsive: ["md"],
    },
    {
      title: "Information",
      dataIndex: "information",
      key: "information",
      render: (text, record) => (
        <div className="d-flex flex-column">
          <p className="mb-0">Login : {record.login}</p>
          <p className="mb-0">Issuance : {record.issuance}</p>
        </div>
      ),
      // responsive: ["md"],
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <Link to="/mastercontest/rewards">
          <Button className="secondary_button" type="secondary">
            <FileDoneOutlined />
            View Details
          </Button>
        </Link>
      ),
      // responsive: ["md"],
    },
  ];

  const handlePanelToggle = (key) => {
    if (activeKey.length > 1) {
      const latestKey = activeKey[activeKey.length - 1];
      setActiveKey([latestKey]);
    }
    console.log("key=", key);
    // const newActiveKey = key.includes(activeKey) ? [key] : [];
    setActiveKey(key);
    const lastKey = activeKey[activeKey.length - 1];
    console.log("lastKey=", lastKey);
  };
  return (
    <>
      <TabsComp
        tabMenu={tabMenu}
        // onTabClick={TabonChange}
        activeKey="active"
        header="Contest"
        showBreadCrum={true}
      />
      <div className="container master_active">
        {/* <Card> */}
        <Collapse
          style={{ background: "#f5f5f5" }}
          activeKey={activeKey}
          onChange={handlePanelToggle}
          bordered={false}
        >
          <Panel
            className="mb-3 bg-white"
            header={
              <div className="d-flex justify-content-between">
                <div className="wrap_with_progress d-flex">
                  <div
                    className="font-weight-bold mb-1 mr-3"
                    style={{ borderBottom: "2px solid #000" }}
                  >
                    Contest No.1
                  </div>
                  <div className="d-none d-md-block" style={{ width: 200 }}>
                    <Progress
                      strokeWidth={20}
                      strokeColor={"#ffc900"}
                      strokeLinecap="butt"
                      percent={80}
                    />
                  </div>
                </div>
                <div>20th May - 20th June</div>
              </div>
            }
            key="1"
          >
            <h5 className="mb-2">My Progress</h5>
            <div className="row mb-2">
              <div className="col-12  col-md-8">
                <Progress
                  strokeWidth={30}
                  strokeColor={"#ffc900"}
                  strokeLinecap="butt"
                  percent={80}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12  col-md-8">
                <Progress
                  strokeWidth={30}
                  strokeColor={"#ffc900"}
                  strokeLinecap="butt"
                  percent={40}
                  showInfo={false}
                />
              </div>
            </div>
            <h5 className="mb-3">Leaderbord</h5>
            <Table
              className="contest_table"
              scroll={{ x: true }}
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </Panel>
          <Panel
            className="mb-3 bg-white"
            header={
              <div className="d-flex justify-content-between">
                <div className="wrap_with_progress d-flex">
                  <div
                    className="font-weight-bold mb-1 mr-3"
                    style={{ borderBottom: "2px solid #000" }}
                  >
                    Contest No.2
                  </div>
                  <div className="d-none d-md-block" style={{ width: 200 }}>
                    <Progress
                      strokeWidth={20}
                      strokeColor={"#ffc900"}
                      strokeLinecap="butt"
                      percent={80}
                    />
                  </div>
                </div>
                <div>1st June - 30th June</div>
              </div>
            }
            key="2"
          >
            <h5 className="mb-2">My Progress</h5>
            <div className="row mb-2">
              <div className="col-12  col-md-8">
                <Progress
                  strokeWidth={30}
                  strokeColor={"#ffc900"}
                  strokeLinecap="butt"
                  percent={80}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12  col-md-8">
                <Progress
                  strokeWidth={30}
                  strokeColor={"#ffc900"}
                  strokeLinecap="butt"
                  percent={40}
                  showInfo={false}
                />
              </div>
            </div>
            <h5 className="mb-3">Leaderbord</h5>
            <Card style={{ width: "100%" }}>
              <Table
                className="contest_table"
                scroll={{ x: true }}
                dataSource={dataSource}
                columns={columns}
                // headerBorderRadius={0}
                pagination={false}
                style={{ width: "100%" }}
              />
            </Card>
          </Panel>
          <Panel
            className="mb-3 bg-white"
            header={
              <div className="d-flex justify-content-between">
                <div className="wrap_with_progress d-flex">
                  <div
                    className="font-weight-bold mb-1 mr-3"
                    style={{ borderBottom: "2px solid #000" }}
                  >
                    Contest No.3
                  </div>
                  <div className="d-none d-md-block" style={{ width: 200 }}>
                    <Progress
                      strokeWidth={20}
                      strokeColor={"#ffc900"}
                      strokeLinecap="butt"
                      percent={80}
                    />
                  </div>
                </div>
                <div>10th Aug - 15th Aug</div>
              </div>
            }
            key="3"
          >
            <h5 className="mb-2">My Progress</h5>
            <div className="row mb-2">
              <div className="col-12  col-md-8">
                <Progress
                  strokeWidth={30}
                  strokeColor={"#ffc900"}
                  strokeLinecap="butt"
                  percent={80}
                  showInfo={false}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12  col-md-8">
                <Progress
                  strokeWidth={30}
                  strokeColor={"#ffc900"}
                  strokeLinecap="butt"
                  percent={40}
                  showInfo={false}
                />
              </div>
            </div>
            <h5 className="mb-3">Leaderbord</h5>
            <Table
              className="contest_table"
              dataSource={dataSource}
              columns={columns}
              headerBorderRadius={0}
              pagination={false}
            />
          </Panel>
        </Collapse>
        {/* </Card> */}
      </div>
    </>
  );
};

export default MasterContestActive;
