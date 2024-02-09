import React, { useState } from "react";
import { Button, Card, Form, Input, Row, Col, Select } from "antd";
import "./login.css";
import crediXLogo from "../../assets/image/Component 1.png";
import { InputOTP } from "antd-input-otp";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const Login = () => {
  const navigate = useNavigate();

  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const verifyOtp = () => {
    setVerify(true);
  }; 

  const onLogin = () => {
    navigate('./home')
  }
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    // <div className="login_page_wrapper">
    <div className="login_wrapper">
      <Card className="login_card">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <div className="d-flex justify-content-center">
            <img src={crediXLogo} alt="CreditX Logo" />
          </div>
          <div className="textarea">
            <div className="welcome">Welcome!</div>
            {!verify ? (
              <div className="otp">
                Please enter your Mobile Number for OTP Verification
              </div>
            ) : (
              <div className="otp">
                OTP has been sent on your registered Mobile number
              </div>
            )}
          </div>

          <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className={verify ? "enterOtp" : "label-phone"}>
            {!verify ? 
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: false,
                    message: "Please input your phone number!",
                  },
                ]}

              >
                <Input
                  prefix={<span>+91</span>}
                  className="phonenumber border"
                />
              </Form.Item> 
              
              : 
              <><Form.Item
                  label="Enter OTP"
                  name="otp"
                 
                  // rules={[{ validator: async () => Promise.resolve() }]}
                >
                  <InputOTP autoFocus inputType="numeric" length={4}  className="center-input-message"/>
                </Form.Item>
                <div className="details d-flex justify-content-between ">
                <div className="otp-info">Please enter 4 digit OTP sent on +91XXXXXXXXXX</div>
                <div className="resend">RESEND</div>
                </div></>
            }
            </Col>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Form.Item>
              {!verify ? 
                <Button className="otpbutton" onClick={verifyOtp}> 
                  Send OTP
                </Button> : 
                <Button className="loginbtn" onClick={onLogin}> 
                Login
              </Button>
              }
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
    // </div>
  );
};

export default Login;
