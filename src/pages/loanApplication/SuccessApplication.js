import { Button, Col, Row } from 'antd';
import React from 'react';
import success from "../../assets/image/Rectangle 215.png";
import { useNavigate } from 'react-router-dom';

const SuccessApplication = () => {
    const navigate = useNavigate();

  return (
    <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <img src={success} width={140} height={140} alt="Success Icon" />
          <div className='success'>Success!</div>
          <div className='loansuccesstext'>
            You have successfully submitted the Loan application.
          </div>
          <div className='eval'>
            We are evaluating your Application
          </div>
          <div className='estimatetime'>
          Estimated Time - 00:05
          </div>
          <Button className='applicationlisting' onClick={() => navigate("/Application-Listing")}>Back to Application Listing</Button>
        </div>
      </Col>
      
    </Row>
  );
}

export default SuccessApplication;
