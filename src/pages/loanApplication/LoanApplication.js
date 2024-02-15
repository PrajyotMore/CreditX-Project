import React, { useEffect, useRef, useState } from "react";
import TabsComp from "../tabs/Tabs";
import {
  Button,
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
const LoanApplication = () => {
  const QueriesApprovalsDetails = () => {
    return <div>2 - Queries & Approvals Details</div>;
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
      <div className="container top_container custom-tabs-class full-width-content">
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]} className="">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Tabs className="card-tabs">
          <Tabs.TabPane
            tab="Application"
            key="Application"
          >
        
      {<ApplicationDetails
        currentStep={currentStep}
        handleSave={handleSave}
        handlePrevious={handlePrevious}

        />}
          </Tabs.TabPane>
  
          <Tabs.TabPane tab="Queries & Approvals" key="Queries & Approvals">
            <Form.Item
              name={["payload", "Queries & Approvals"]}
              label="Queries & Approvals"
              placeholder="Queries & Approvals"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            {/* Move saveButton to tabBarExtraContent */}
          </Tabs.TabPane>
        </Tabs>
          </Col>
          
        </Row>
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex justify-content-between p-3">
        {(currentStep === 1) ? <Button className="cancel">Cancel</Button> : (currentStep === 7) ? 
        null : (
          <Button className="cancel" onClick={handlePrevious}>
            Previous
          </Button>
        )}
        {
          currentStep === 7 ? null : (
          <Button className="savebtn" onClick={handleSave}>
            {currentStep === 6 ? "Submit" : "Save & Proceed"}
          </Button>
        )
        }
        
      </Col>
        </Row>
        
      </div>
    </>
  );
};

export default LoanApplication;
