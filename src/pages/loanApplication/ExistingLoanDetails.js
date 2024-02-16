import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Progress,
  Row,
  Select,
  Upload,
} from "antd";
import { InputOTP } from "antd-input-otp";
import React from "react";
import { useState } from "react";

const ExistingLoanDetails = () => {
  const [openCibilModal, setOpenCibilModal] = useState(false);
  const [onSendOtp,setOnSendOtp] = useState(false);
  const sendOtp = () => {
    setOnSendOtp(!onSendOtp)
  }
  const ShowCibilModal = () => {
    setOpenCibilModal(true);
  };

  const handleOk = () => {
    setOpenCibilModal(false);
  };
  const handleCancel = () => {
    setOpenCibilModal(false);
  };
  return (
    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex flex-row justify-content-between ">
        <div className="loandetailstitle">3 - Existing Loan Details</div>
        <div className="d-flex flex-column" style={{ width: "40%" }}>
          <div className="currentprogress">Current Progress</div>
          <div>
            <Progress percent={40} strokeColor="#003399" />
          </div>
        </div>
      </Col>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24} className="loandetail">
        <div className="d-flex justify-content-between">
          <div className="loantitle">Credit Bureau Details</div>
          <div className="locatemap" onClick={ShowCibilModal}>
            Fetch CIBIL Report
          </div>
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
                <DatePicker  size="large" disabled style={{ width: "100%" }} />
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
                <Input type="number"  size="large" disabled />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="uploaddata">
                <Upload>
                  <Button
                    icon={<UploadOutlined />}
                    className="uploadbtn"
                    style={{marginTop:'15px'}}
                    disabled
                  >
                    Consumer Credit Report
                    <p className="filetypetitle">Click to View / Download</p>
                  </Button>
                </Upload>
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
                <Input type="text" size="large" placeholder="Enter Bank Name" />
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
                <Input type="text"  size="large" placeholder="Enter Facility" />
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
                <Input type="text"  size="large" placeholder="Enter Sanctioned Amount" />
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
                <Input type="text"  size="large" placeholder="Enter Present Outstanding" />
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
                <Select placeholder="Select"  size="large">
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
                <Input placeholder="Enter Active Monthly EMI"  size="large" type="number" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
     
      <Modal
      width={600}
        title="CIBIL Consent"
        open={openCibilModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#003399",
                border: "1px solid #003399",
                borderRadius: "8px",
                width: "96px",
                height: "42px",
                padding: "10px 22px 10px 22px",
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#003399",
                color: "#fff",
                border: "1px solid #003399",
                boxShadow: "0px 2px 12px 0px #00339952",
                width: "118px",
                height: "42px",
                padding: "10px 22px 10px 22px",
                borderRadius: "8px",
              }}
              onClick={sendOtp}
            >
              {onSendOtp ? "Verify" : "Send OTP"  }
            </Button>
          </>
        )}
      >
        <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]} className="otpcibilwrapper">
       
        {onSendOtp ? (
          <Form layout="vertical">
            <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]} className="otpcibilwrapper">
              <Col xs={16} sm={16} md={20} lg={24} xl={24}>
                An OTP has been sent to the customer’s PAN-linked mobile number.
              </Col>
              <Col xs={14} sm={14} md={20} lg={24} xl={24} className="cibilotp">
                <Form.Item label="Enter OTP" name="otp">
                  <InputOTP
                    autoFocus
                    inputType="numeric"
                    length={6}
                    className="center-input-message"
                  />
                </Form.Item>
              <div className="d-flex justify-content-between">
              <div className="sixdigitotp">
              Please enter 6 digit OTP sent on +91 XXXXXXXX34
              </div>
              <div className="resendText">
              RESEND
              </div>
              </div>
              </Col>
              
            </Row>
          </Form>
        ) : <><Col xs={16} sm={16} md={24} lg={24} xl={24}>
              To fetch the customer's CIBIL report, click the "Send OTP" button below.
            </Col><Col xs={16} sm={16} md={24} lg={24} xl={24}>
                For capturing the customer’s consent, we will send an OTP to the mobile
                number linked to the customer's PAN.
              </Col></>}
        </Row>
      </Modal>
    </Row>
  );
};

export default ExistingLoanDetails;
