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
const LoanApplication = () => {
  // const [saveAndProceedData, setSaveAndProceedData] = useState(true);

  const [saveLoanAndProceedData, setLoanSaveAndProceedData] = useState(true);
  const [saveBasicAndProceedData, setBasicSaveAndProceedData] = useState(true);
  const [saveExistingLoansAndProceedData, setExistingLoanSaveAndProceedData] = useState(true);

 

  useEffect(() => {
    // Find the default active tab
    const defaultTab = tabMenu.find((tab) => tab.key === activeTab);
    // Set the content of the default active tab
    if (defaultTab) {
      setTabContent(defaultTab.component);
    }
  }, []);
  

  const ApplicationDetails = () => {
    const contentRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(1);

    const handleSave = () => {
      setCurrentStep((prevStep) => prevStep + 1);
    };
    return (
      <><div>
        {currentStep === 1 ? <LoanDetails /> :
          currentStep === 2 ? <BasicDetails /> :
            currentStep === 3 ? <ExistingLoanDetails /> : null}
      </div><Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="d-flex justify-content-between p-3">
              <Button className="cancel">Cancel</Button>
              <Button
                className="savebtn"
                onClick={() => handleSave()}
              >
                Save & Proceed
              </Button>
            </div>
          </Col>
        </Row></>
    );
  };
  const QueriesApprovalsDetails = () => {
    return <div>2 - Queries & Approvals Details</div>;
  };
  const tabMenu = [
    {
      key: "1",
      label: "Application",
      component: <ApplicationDetails />,
    },
    {
      key: "2",
      label: "Queries & Approvals",
      component: <QueriesApprovalsDetails />,
    },
  ];

  const [activeTab, setActiveTab] = useState("1"); // Initial active tab
  const [tabContent, setTabContent] = useState(null);

  const handleTabChange = (key) => {
    setActiveTab(key);

    // Update content based on the selected tab
    const selectedTab = tabMenu.find((tab) => tab.key === key);
    setTabContent(selectedTab ? selectedTab.component : null);
  };

  return (
    <>
      <TabsComp header="Loan Application" showBreadCrum={true} />

      <div className="container top_container custom-tabs-class p-0">
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Tabs defaultActiveKey="1" type="card" onChange={handleTabChange}>
              {tabMenu.map((tab) => (
                <Tabs.TabPane key={tab.key} tab={tab.label} className="tabber">
                  <div className="full-width-content">{tabContent}</div>
                </Tabs.TabPane>
              ))}
            </Tabs>
          </Col>
        </Row>
      
      </div>
    </>
  );
};

export default LoanApplication;
