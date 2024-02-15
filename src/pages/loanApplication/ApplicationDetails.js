import { useState } from "react";
import BasicDetails from "./BasicDetails";
import ExistingLoanDetails from "./ExistingLoanDetails";
import LoanDetails from "./LoanDetails";
import { Button, Col, Row } from "antd";
import EntityDetails from "./EntityDetails";
import BankDetails from "./BankDetails";
import DocumentUpload from "./DocumentUpload";
import SuccessApplication from "./SuccessApplication";

const ApplicationDetails = ({currentStep,handlePrevious,handleSave}) => {

  return (
    <>
      <div className="loancontainer">
       
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {currentStep === 1 ? (
            <>
                
                <LoanDetails/>
                </>
          ) : currentStep === 2 ? (
            <BasicDetails />
          ) : currentStep === 3 ? (
            <ExistingLoanDetails />
          ) : currentStep === 4 ? (
            <EntityDetails />
          ) : currentStep === 5 ? (
            <BankDetails />
          ) :  currentStep === 6 ? (
            <DocumentUpload />
          ) :  currentStep === 7 ? (
            <SuccessApplication />
          ) : null}
            
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ApplicationDetails;
