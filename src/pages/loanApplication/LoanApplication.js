import React, { useEffect, useRef, useState } from "react";
import TabsComp from "../tabs/Tabs";
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Progress,
  Radio,
  Row,
  Select,
  Tabs,
  Upload,
} from "antd";
import "./LoanApplication.css";

import iconLeft from "../../assets/image/Icon Left.png";
import plusIcon from "../../assets/image/plus icon.png";
import info from "../../assets/image/info.png";
import { UploadOutlined } from "@ant-design/icons";
import BasicDetails from "./BasicDetails";
import ExistingLoanDetails from "./ExistingLoanDetails";
import LoanDetails from "./LoanDetails";
import ApplicationDetails from "./ApplicationDetails";
import EntityDetails from "./EntityDetails";
import BankDetails from "./BankDetails";
import UploadComponent from "./UploadComponent";
const LoanApplication = () => {
  const [size, setSize] = useState('small');
    const onChange = (e) => {
      setSize(e.target.value);
    };
  const QueriesApprovalsDetails = () => {
    return (
      <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={24}
        xl={24}
        className=""
      >
        <div className="loandetailstitle">List of Pending Queries & Approvals</div>
        <Card>
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={2}
          xl={2}
          className=""
        >
        <div>Application ID</div>
        <div>ID266534532</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={2}
          xl={2}
        >
        <div>Case ID</div>
        <div>1423</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={4}
          xl={4}
        >
        <div>Date & Time</div>
        <div>12 Jan, 24 @12:40</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={4}
          xl={4}
        >
        <div>Query Description</div>
        <div>PAN card is not clear. Please re-upload the clear image</div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={6}
          xl={6}
        >
        <UploadComponent showLabel={false} label="Document" />
        </Col>
        <Col
        xs={24}
        sm={24}
        md={12}
        lg={6}
        xl={6}
      >
      <div>RESOLVED</div>
      </Col>
        </Row>
        </Card>
        </Col>
        </Row>
              );
  };
  const [currentStep, setCurrentStep] = useState(1);

  const initialValues = {
    name: "name",
    description: "description",
    payload: { content: "content data" },
  };

  const handleSave = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <TabsComp header="Loan Application" showBreadCrum={true} />
      <div className="container top_container custom-tabs-class full-width-content mt-2">
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="p-0">
            <Tabs className="card-tabs" defaultActiveKey="1" type="card"   size={size}
            >
              <Tabs.TabPane tab="Application" key="Application">
                {
                  <ApplicationDetails
                    currentStep={currentStep}
                    handleSave={handleSave}
                    handlePrevious={handlePrevious}
                  />
                }
              </Tabs.TabPane>

              <Tabs.TabPane tab="Queries & Approvals" key="Queries & Approvals">
                <QueriesApprovalsDetails/>
                {/* Move saveButton to tabBarExtraContent */}
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className="d-flex justify-content-between p-3"
          >
            {currentStep === 1 ? (
              <Button className="cancel">Cancel</Button>
            ) : currentStep === 7 ? null : (
              <Button className="cancel" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {currentStep === 7 ? null : (
              <Button className="savebtn" onClick={handleSave}>
                {currentStep === 6 ? "Submit" : "Save & Proceed"}
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LoanApplication;
