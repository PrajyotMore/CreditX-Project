import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Progress,
  Row,
  Select,
  Upload,
} from "antd";
import React from "react";

const ExistingLoanDetails = () => {
  return (
    <div className="loancontainer">
      <div className="d-flex flex-row justify-content-between ">
        <div className="loandetailstitle">3 - Existing Loan Details</div>
        <div className="d-flex flex-column" style={{ width: "40%" }}>
          <div className="currentprogress">Current Progress</div>
          <div>
            <Progress percent={40} strokeColor="#003399" />
          </div>
        </div>
      </div>
      <div className="loandetail">
      <div className="d-flex justify-content-between">
        <div className="loantitle">Credit Bureau Details</div>
        <div className="locatemap">Fetch CIBIL Report</div>
        </div>
        <Form autoComplete="off" layout="vertical">
          <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
                name="cibildateandtime"
                label="CIBIL Date and time"
                rules={[
                  {
                    required: false,
                    message: "Please ",
                  },
                ]}
              >
                <DatePicker disabled style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
                name="cibilscore"
                label="CIBIL Score"
                rules={[
                  {
                    required: true,
                    message: "Please enter mobile number",
                  },
                ]}
              >
                <Input
                  type="number"
                  disabled
                  // suffix={<p className="verifytext">VERIFY</p>}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
              <Form.Item
                name="consumercreditreport"
                label=""
                rules={[
                  {
                    required: false,
                    message: "consumer credit report",
                  },
                ]}
                style={{ width: "250px" }}
                className="uploaddata"
              >
                <Upload>
                  <Button
                    icon={<UploadOutlined />}
                    className="uploadbtn"
                    disabled
                  >
                    Consumer Credit Report
                    <p className="filetypetitle">Click to View / Download</p>
                  </Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="d-flex justify-content-between">
                <div className="permanentaddress">Existing loan details</div>
                {/* <div className="locatemap">Locate on Map</div> */}
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
                name="bankname"
                label="Bank Name"
                rules={[
                  {
                    required: false,
                    message: "Please enter address",
                  },
                ]}
              >
                <Input type="text" placeholder="Enter Bank Name" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
                name="natureoffacility"
                label="Nature of facility"
                rules={[
                  {
                    required: false,
                    message: "Please enter address",
                  },
                ]}
              >
                <Input type="text" placeholder="Enter Facility" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              name="sanctionedamount"
              label="Sanctioned Amount"
              rules={[
                {
                  required: false,
                  message: "Please enter address",
                },
              ]}
            >
              <Input type="text" placeholder="Enter Sanctioned Amount" />
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Form.Item
            name="presentoutstanding"
            label="Present Outstanding"
            rules={[
              {
                required: false,
                message: "Please enter address",
              },
            ]}
          >
            <Input type="text" placeholder="Enter Present Outstanding" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Form.Item
              name="securityoffered"
              label="Security offered"
              rules={[
                {
                  required: false,
                  message: "Please enter address",
                },
              ]}
            >
             <Select placeholder="Select">
             <option></option>
             </Select>
            </Form.Item>
          </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Form.Item
            name="activemonthlyemi"
            label="Active Monthly EMI"
            rules={[
              {
                required: false,
                message: "Please enter address",
              },
            ]}
          >
           <Input placeholder="Enter Active Monthly EMI" type="number"/>
          </Form.Item>
        </Col>


        

           
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default ExistingLoanDetails;
