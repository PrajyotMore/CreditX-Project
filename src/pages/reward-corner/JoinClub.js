import React from "react";
import TabsComp from "../tabs/Tabs";
import "./joinclub.css";
import { Button, Card, Progress, Table } from "antd";
import { Link } from "react-router-dom";
import { FileDoneOutlined } from "@ant-design/icons";

const tableStyle = {
  components: {
    header: {
      cell: {
        borderRight: "none",
      },
    },
  },
};
const JoinClub = () => {
  const tabMenu2 = [
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

  const data = [
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
      width: 150,
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
      responsive: ["md"],
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
      responsive: ["md"],
    },
    {
      title: "Actions",
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
    },
  ];

  return (
    <>
      <TabsComp
        tabMenu={tabMenu2}
        activeKey=""
        header="Contest"
        showBreadCrum={true}
      />
      <div className="container joinclub">
        <div className="h6">Digital East Contest (1st to 30th June)</div>
        <Card>
          <Table
            className="contest_table"
            scroll={{ x: true }}
            dataSource={data}
            columns={columns}
            headerBorderRadius={0}
            pagination={false}
            style={tableStyle}
          />
        </Card>
      </div>
    </>
  );
};

export default JoinClub;
