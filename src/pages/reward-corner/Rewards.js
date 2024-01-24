import React from "react";
import TabsComp from "../tabs/Tabs";
import "./rewards.css";
import { Card, Col, Progress, Row, Table, Tabs } from "antd";

const { TabPane } = Tabs;
const tableStyle = {
  components: {
    header: {
      cell: {
        borderRight: "none",
      },
    },
  },
};
const Rewards = () => {
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
      title: "Rank",
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
  ];
  return (
    <>
      <TabsComp
        tabMenu={tabMenu}
        activeKey=""
        header="Contest"
        showBreadCrum={true}
      />
      <div className="container rewards">
        <Card className="mb-3">
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
        <div className="button_tabs d-flex justify-content-center mb-3">
          <Tabs
            defaultActiveKey="1"
            style={{ width: "100%" }}
            tabBarStyle={{ justifyContent: "center" }}
          >
            <TabPane tab="Prizes" key="1">
              <Row gutter={{ xs: 8, sm: 12, md: 16, lg: 16 }}>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Card>
                    <div className="custom_carrds">
                      <header className="header_text">First Runner Up</header>
                      <div className="body"></div>
                      <footer>
                        The winner get IFB Washing Machine worth ₹ 25,699/-
                      </footer>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Card>
                    <div className="custom_carrds">
                      <header className="header_text">First Runner Up</header>
                      <div className="body"></div>
                      <footer>
                        The winner get IFB Refrigerator worth ₹ 20,699/-
                      </footer>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={8} lg={8}>
                  <Card>
                    <div className="custom_carrds">
                      <header className="header_text">Second Runner Up</header>
                      <div className="body"></div>
                      <footer>
                        The winner get IFB Microwave worth ₹ 5,000/-
                      </footer>
                    </div>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="Extras" key="2">
              <Card>
                <h5 className="mb-3">Extras</h5>
                <p>
                  A Head to Head between the regions, win the privilege to be
                  the “Pride of Digital East Regions”
                </p>
                <p>
                  And your Rival??? Unlock the secret rival of your region by
                  completing 80% of Sales Assist installation by the SMs of the
                  region
                </p>
                <p>Till you unlock your secret Rival, it’s playing blind!!!</p>
              </Card>
            </TabPane>
            <TabPane tab="Videos" key="3">
              <Card>
                <h5> Proud Moments Captured</h5>
                <Row>
                  <Col xs={24} sm={24} md={8} lg={8}>
                    <img
                      className="w-100"
                      src="https://salesdriveapp.iorta.in/img/user/user-testimonials.png"
                      alt="p_moment_img"
                    />
                  </Col>
                  <Col xs={24} sm={24} md={16} lg={16}>
                    <div
                      className="font-weight-bold"
                      style={{ fontSize: "1rem" }}
                    >
                      Amit Kumar, Winner of Digital East, Q1 (2016-17)
                    </div>
                    <div className="text-muted">
                      On an everyday basis, Bluebeam helps create an environment
                      where anything is possible in the creation and
                      modification of PDFs. With the new release of Revu 11,
                      users have even more functionality to work with such as
                      the Format Painter. The capability to copy the formatted
                      appearance from one annotation to another has spedup...
                      Built documentation tremendously. Also, with the creation
                      of Sets and the ability to split documents into multiple
                      sections, Bluebeam has now evolved the process of forming
                      maintenance manuals into a well-oiled machine On an
                      everyday basis, Bluebeam helps create an environment where
                      anything is possible in the creation and modification of
                      PDFs. With the new release of Revu 11, users have even
                      more functionality to work with such as the Format
                      Painter. The capability to copy the formatted appearance
                      from one annotation to another has spedup... Built
                      documentation tremendously. Also, with the creation of
                      Sets and the ability to split documents into multiple
                      sections, Bluebeam has now evolved the process of forming
                      maintenance manuals into a well-oiled machine.
                    </div>
                  </Col>
                </Row>
                <p
                  className="text-muted"
                  style={{ color: "#cccccc", fontSize: "14px" }}
                >
                  - Robert Howard, Construction Office Engineer
                </p>
              </Card>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Rewards;
