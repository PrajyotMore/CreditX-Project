import { Button, Col, Form, Input, Progress, Row, Select } from "antd";
import React from "react";
import infoblue from "../../assets/image/infoblue.png";
const BankDetails = () => {
  return (
    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
    <Col  xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex flex-row justify-content-between ">
        <div className="loandetailstitle">5 - Bank Details</div>
        <div className="d-flex flex-column" style={{ width: "40%" }}>
          <div className="currentprogress">Current Progress</div>
          <div>
            <Progress percent={80} strokeColor="#003399" />
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="loandetail">
        <Form autoComplete="off" layout="vertical">
          <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="loantitle">
              Operating Bank Details
              <img src={infoblue} className="p-2" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
            name="ifsccode"
            label="IFSC Code"
            rules={[
              {
                required: true,
                message: "Please enter ifsc code",
              },
            ]}
          >
            <Input type="text" placeholder="Enter IFSC Code"  size="large" />
          </Form.Item>
    </Col>
    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
            name="accountnumber"
            label="Account Number"
            rules={[
              {
                required: true,
                message: "Please enter account number",
              },
            ]}
          >
            <Input type="text" placeholder="Enter Account No"  size="large" />
          </Form.Item>
    </Col>
    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
    <Form.Item
    name="accountholdername"
    label="Account Holder Name"
    rules={[
      {
        required: true,
        message: "Please enter account holder name",
      },
    ]}
  >
    <Input type="text" placeholder="Enter Account Holder Name"  size="large" />
  </Form.Item>
</Col>
<Col xs={24} sm={24} md={24} lg={8} xl={8}>
    <Form.Item
    name="branchname"
    label="Branch Name"
    rules={[
      {
        required: true,
        message: "Please enter branch name",
      },
    ]}
  >
    <Input type="text" placeholder="Enter Branch Name"  size="large" />
  </Form.Item>
</Col>
<Col xs={24} sm={24} md={24} lg={8} xl={8}>
    <Form.Item
    name="micrcode"
    label="MICR Code"
    rules={[
      {
        required: true,
        message: "Please enter micr code",
      },
    ]}
  >
    <Input type="text" placeholder="Enter MICR Code"  size="large" />
  </Form.Item>
</Col>
<Col xs={24} sm={24} md={24} lg={8} xl={8}>
    <Form.Item
    name="bankname"
    label="Bank Name"
    rules={[
      {
        required: true,
        message: "Please enter bank name",
      },
    ]}
  >
    <Select placeholder="Select"  size="large">
    <option></option>
    </Select>
  </Form.Item>
</Col>
<Col xs={24} sm={24} md={24} lg={8} xl={8}>
    <Form.Item
    name="accounttype"
    label="Account Type"
    rules={[
      {
        required: true,
        message: "Please enter account type",
      },
    ]}
  >
    <Select placeholder="Select"  size="large">
    <option></option>
    </Select>
  </Form.Item>
</Col>
<Col xs={24} sm={24} md={24} lg={8} xl={8}>
    <Form.Item
    name="noofyearrelationshipwithbank"
    label="No of years of relationship with bank"
    rules={[
      {
        required: true,
        message: "Please enter no of year",
      },
    ]}
  >
    <Input type="text" placeholder="Enter No of years"  size="large" />
  </Form.Item>
</Col>

          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default BankDetails;
