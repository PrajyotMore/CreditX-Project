import React from "react";
import { Line } from "@ant-design/charts";
import "./MyOverallRanking.css";
import TabsComp from "../tabs/Tabs";
import { Card } from "antd";
const OverallRanking = () => {
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
      year: "2017-06-05",
      label: {
        visible: false,
      },
      value: 120,
    },
    { year: "2017-06-13", value: 240 },
    { year: "2017-06-20", value: 320 },
    { year: "2017-06-22", value: 320 },
    // {  value: 5 },
    // { value: 4.9 },
    // { value: 6 },
    // {  value: 7 },
    // {  value: 9 },
    // {  value: 13 },
  ];
  const data1 = [
    {
      year: "2017-04-21",
      label: {
        visible: false,
      },
      value: 20,
    },
    { year: "2017-04-16", value: 40 },
    { year: "2017-04-10", value: 20 },
    { year: "2017-04-12", value: 10 },
    // {  value: 5 },
    // { value: 4.9 },
    // { value: 6 },
    // {  value: 7 },
    // {  value: 9 },
    // {  value: 13 },
  ];
  data.forEach((item) => {
    console.log("year===", item.year);
  });

  const config = {
    data,
    height: 400,
    xField: "year",
    yField: "value",
    className: "myoverallranking-chart1-style",
  };
  const config1 = {
    data: data1,
    height: 400,
    xField: "year",
    yField: "value",
    className: "myoverallranking-chart1-style",
  };

  return (
    <>
      <TabsComp
        showBreadCrum={true}
        header="My Activity"
        tabMenu={tabMenu}
        activeKey="overall"
      />
      <div className="container">
        <Card>
          <p
            className="font-weight-bold  mb-0"
            style={{
              width: "max-content",
              borderBottom: "2px solid #000",
              fontSize: "15px",
            }}
          >
            {" "}
            View All My Ranking
          </p>
          <div className="myoverallranking-main">
            <div className="myoverallranking-card-style">
              <div className="myoverallranking-content-flex">
                <h4 className="myoverallranking-content-text">
                  View All My Ranking
                </h4>
                <div className="myoverallranking-content-row-flex">
                  <Line {...config1} />
                  <Line {...config} />
                </div>

                <div className="myoverallranking-content-row-flex">
                  <Line {...config} />
                  <Line {...config1} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default OverallRanking;
