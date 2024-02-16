import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Progress,
  Row,
  Select,
  Upload,
  message,
} from "antd";
import "./LoanApplication.css";
import iconLeft from "../../assets/image/Icon Left.png";
import plusIcon from "../../assets/image/plus icon.png";
import info from "../../assets/image/info.png";
import {
  CloseOutlined,
  DeleteOutlined,
  SearchOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import maps from "../../assets/image/map.png";
import { InputOTP } from "antd-input-otp";
import UploadComponent from "./UploadComponent";

const BasicDetails = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (e) => {
    console.log("checked = ", e.target.checked);
    setIsChecked(e.target.checked);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalEmailVerifyOpen, setIsModalEmailVerifyOpen] = useState(false);
  const [isModalMobileVerifyOpen, setIsModalMobileVerifyOpen] = useState(false);
  const showModalMap = () => {
    setIsModalOpen(true);
  };
  const showModalEmailVerify = () => {
    setIsModalEmailVerifyOpen(true);
  };
  const showModalMobileVerify = () => {
    setIsModalMobileVerifyOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOkEmailVerify = () => {
    setIsModalEmailVerifyOpen(false);
    // Place your logic here for email verification
  };

  const handleOkMobileVerify = () => {
    setIsModalMobileVerifyOpen(false);
    // Place your logic here for mobile number verification
  };

  const handleEmailCancel = () => {
    // setIsModalOpen(false);
    setIsModalEmailVerifyOpen(false);
    // setIsModalMobileVerifyOpen(false);
  };

  const handleMobileCancel = () => {
    // setIsModalOpen(false);
    // setIsModalEmailVerifyOpen(false);
    setIsModalMobileVerifyOpen(false);
  };

  // const WrappedMap = withScriptjs(withGoogleMap(props => (
  //   <GoogleMap
  //     defaultZoom={8}
  //     defaultCenter={{ lat: -34.397, lng: 150.644 }}
  //   >
  //     {/* Optional: Add Marker */}
  //     <Marker position={{ lat: -34.397, lng: 150.644 }} />
  //   </GoogleMap>
  // )));

  // const MyMapComponent = () => (
  //   <div style={{ width: '100%', height: '400px' }}>
  //     <WrappedMap
  //       googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places`}
  //       loadingElement={<div style={{ height: `100px` }} />}
  //       containerElement={<div style={{ height: `100px` }} />}
  //       mapElement={<div style={{ height: `100px` }} />}
  //     />
  //   </div>
  // );
  // const [aadharFrontFile, setAadhardharFrontFile] = useState(null);
  // const [aadharFrontFileimageUrl, setAadharFrontFileImageUrl] = useState(null);
  // const [aadharBackFile, setAadhardharBackFile] = useState(null);
  // const [aadharBackFileimageUrl, setAadharBackFileImageUrl] = useState(null);
  // const [uploadProgress, setUploadProgress] = useState(0);

 
  // const handleAadharFrontUpload = (info) => {
  //   const { file } = info;
  //   if (!file) return;
  
  //   // Simulate upload progress (replace with actual upload logic)
  //   let progress = 0;
  //   const interval = setInterval(() => {
  //     progress = progress + 10;
  //     if (progress >= 100) {
  //       clearInterval(interval);
  //       setUploadProgress(0); // Reset progress for next upload
  //     } else {
  //       setUploadProgress(progress);
  //     }
  //   }, 500);
  
  //   // Read file as data URL
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setAadhardharFrontFile(file);
  //     setAadharFrontFileImageUrl(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };
  
  // const handleAadharBackUpload = (info) => {
  //   const { file } = info;
  //   if (!file) return;
  
  //   // Simulate upload progress (replace with actual upload logic)
  //   let progress = 0;
  //   const interval = setInterval(() => {
  //     progress = progress + 10;
  //     if (progress >= 100) {
  //       clearInterval(interval);
  //       setUploadProgress(0); // Reset progress for next upload
  //     } else {
  //       setUploadProgress(progress);
  //     }
  //   }, 500);
  
  //   // Read file as data URL
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setAadhardharBackFile(file);
  //     setAadharBackFileImageUrl(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };
// const handleAdharFrontRemove = () => {
//   setAadhardharFrontFile(null);
//   setAadharFrontFileImageUrl(null);
// };

// const handleAdharBackRemove = () => {
//   setAadhardharBackFile(null);
//   setAadharBackFileImageUrl(null);
// };

  return (
    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={24}
        xl={24}
        className="d-flex flex-row justify-content-between "
      >
        <div className="loandetailstitle">2 - Applicant Details</div>
        <div className="d-flex flex-column" style={{ width: "40%" }}>
          <div className="currentprogress">Current Progress</div>
          <div>
            <Progress percent={20} strokeColor="#003399" />
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12} lg={24} xl={24} className="loandetail">
        <div className="loantitle">Basic Details</div>
        <Form autoComplete="off" layout="vertical">
          <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="applicantfullname"
                label="Applicant’s Full Name"
                rules={[
                  {
                    required: true,
                    message: "Please applicant full name",
                  },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="applicantmobilenumber"
                label="Applicant’s Mobile Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter mobile number",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  suffix={
                    <div
                      className="input-text-verify"
                      onClick={showModalMobileVerify}
                    >
                      VERIFY
                    </div>
                  }
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="emailid"
                label="Applicant's Email ID"
                rules={[
                  {
                    required: true,
                    message: "Please enter email id",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  suffix={
                    <div
                      className="input-text-verify"
                      onClick={showModalEmailVerify}
                    >
                      VERIFY
                    </div>
                  }
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="dob"
                label="Date Of Birth"
                rules={[
                  {
                    required: true,
                    message: "Please enter date of birth",
                  },
                ]}
              >
                <DatePicker
                  format="dd/mm/yyyy"
                  style={{ width: "100%" }}
                  size="large"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please enter gender",
                  },
                ]}
              >
                <Select size="large">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}></Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="aadharnumber"
                label="Aadhar Number"
                rules={[
                  {
                    required: true,
                    message: "Please aadhar number",
                  },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={16}
              className="verifywrapperinfo"
            >
              <div className="verificationwrapper">
                <img src={iconLeft} style={{ width: "20px", height: "20px" }} />
                <div className="shareverification">Share Verification Link</div>
              </div>
              <div className="infowrapper">
                <img src={info} style={{ width: "16px", height: "16px" }} />
                <div className="intotitleverification">
                  customer has to visit the link and complete the verification
                  process. the link is valid only for 30 mins.
                </div>
              </div>
            </Col>
            <UploadComponent label="Aadhar Front"/>
            <UploadComponent label="Aadhar Back"/>
            <Col xs={24} sm={24} md={24} lg={34} xl={24}></Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="pannumber"
                label="PAN Number"
                rules={[
                  {
                    required: true,
                    message: "Please Pan number",
                  },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={16}
              xl={16}
              className="verifywrapperinfo"
            >
              <div className="verificationwrapper">
                <img src={iconLeft} style={{ width: "20px", height: "20px" }} />
                <div className="shareverification">Share Verification Link</div>
              </div>
              <div className="infowrapper">
                <img src={info} style={{ width: "16px", height: "16px" }} />
                <div className="intotitleverification">
                  customer has to visit the link and complete the verification
                  process. the link is valid only for 30 mins.
                </div>
              </div>
            </Col>
            <UploadComponent label="PAN"/>

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="d-flex justify-content-between">
                <div className="permanentaddress">
                  Permanent Address Details
                </div>
                <div className="locatemap" onClick={showModalMap}>
                  Locate on Map
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="permanentaddressline1"
                label="Permanent Address Line 1"
                rules={[
                  {
                    required: true,
                    message: "Please enter address",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Enter Permanent Address"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="permanentaddressline2"
                label="Permanent Address Line 2"
                rules={[
                  {
                    required: true,
                    message: "Please enter permanent address",
                  },
                ]}
              >
                <Input
                  type="text"
                  size="large"
                  placeholder="Enter Permanent Address"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="area"
                label="Area"
                rules={[
                  {
                    required: false,
                    message: "Please enter area",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter Area" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="city"
                label="City"
                rules={[
                  {
                    required: false,
                    message: "Please enter city",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter City" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="state"
                label="State"
                rules={[
                  {
                    required: false,
                    message: "Please enter state",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter State" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  {
                    required: false,
                    message: "Please enter country",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter Country" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="pincode"
                label="PIN Code"
                rules={[
                  {
                    required: true,
                    message: "Please enter pin code",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter PIN Code" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="latitude"
                label="Latitude"
                rules={[
                  {
                    required: false,
                    message: "Please enter latitude",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter Latitude" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8}>
              <Form.Item
                name="longitude"
                label="Longitude"
                rules={[
                  {
                    required: false,
                    message: "Please enter longitude",
                  },
                ]}
              >
                <Input type="text" size="large" placeholder="Enter Longitude" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Checkbox
                name="currentaddresssameaspermanenaddress"
                checked={isChecked}
                onChange={handleCheckboxChange}
              >
                Is Current address same as Permanent address
              </Checkbox>
            </Col>
            {!isChecked && (
              <>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="d-flex justify-content-between">
                    <div className="permanentaddress">
                      Current Address Details
                    </div>
                    <div className="locatemap" onClick={showModalMap}>
                      Locate on Map
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="currentaddressline1"
                    label="Current Address Line 1"
                    rules={[
                      {
                        required: true,
                        message: "Please enter address",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter Current Address"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="currentaddressline2"
                    label="Current Address Line 2"
                    rules={[
                      {
                        required: true,
                        message: "Please enter permanent address",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter Current Address"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="area"
                    label="Area"
                    rules={[
                      {
                        required: false,
                        message: "Please enter area",
                      },
                    ]}
                  >
                    <Input type="text" size="large" placeholder="Enter Area" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="city"
                    label="City"
                    rules={[
                      {
                        required: false,
                        message: "Please enter city",
                      },
                    ]}
                  >
                    <Input type="text" size="large" placeholder="Enter City" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="state"
                    label="State"
                    rules={[
                      {
                        required: false,
                        message: "Please enter state",
                      },
                    ]}
                  >
                    <Input type="text" size="large" placeholder="Enter State" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={[
                      {
                        required: false,
                        message: "Please enter country",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter Country"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="pincode"
                    label="PIN Code"
                    rules={[
                      {
                        required: true,
                        message: "Please enter pin code",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter PIN Code"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="latitude"
                    label="Latitude"
                    rules={[
                      {
                        required: false,
                        message: "Please enter latitude",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter Latitude"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                  <Form.Item
                    name="longitude"
                    label="Longitude"
                    rules={[
                      {
                        required: false,
                        message: "Please enter longitude",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      size="large"
                      placeholder="Enter Longitude"
                    />
                  </Form.Item>
                </Col>
              </>
            )}

            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="d-flex justify-content-center">
                <Button className="addcoapplicantbtn">
                  <img src={plusIcon} />
                  Add Co-applicant
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
        <Modal
          title="Locate On Map"
          // className="locateonmapmodal"
          open={isModalOpen}
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
                  width: "178px",
                  height: "42px",
                  padding: "10px 22px 10px 22px",
                  borderRadius: "8px",
                }}
              >
                Confirm Location
              </Button>
            </>
          )}
        >
          <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
            <div className="container">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Input placeholder="Search" suffix={<SearchOutlined />} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="m-2">
                  <img src={maps} width="100%" />
                </div>
              </Col>
            </div>
          </Row>
        </Modal>
        <Modal
          title="Locate On Map"
          // className="locateonmapmodal"
          open={isModalEmailVerifyOpen}
          onOk={handleOkEmailVerify}
          onCancel={handleEmailCancel}
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
                  width: "89px",
                  height: "42px",
                  padding: "10px 22px 10px 22px",
                  borderRadius: "8px",
                }}
              >
                Verify
              </Button>
            </>
          )}
        >
          <Form
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Row
              gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}
              className="otpWrapper"
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="emailtextotp"
              >
                We have sent an OTP on the Applicant’s Email ID
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} className="enterOtp">
                <Form.Item label="Enter OTP" name="otp">
                  <InputOTP
                    autoFocus
                    inputType="numeric"
                    length={4}
                    className="center-input-message"
                  />
                </Form.Item>
                <div className="details d-flex justify-content-center ">
                  <div className="otp-info">
                    Didn’t receive an OTP?{" "}
                    <span className="resendotp">Resend OTP</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal>
        <Modal
          title="Locate On Map"
          // className="locateonmapmodal"
          open={isModalMobileVerifyOpen}
          onOk={handleOkMobileVerify}
          onCancel={handleMobileCancel}
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
                  width: "89px",
                  height: "42px",
                  padding: "10px 22px 10px 22px",
                  borderRadius: "8px",
                }}
              >
                Verify
              </Button>
            </>
          )}
        >
          <Form
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Row
              gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}
              className="otpWrapper"
            >
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="emailtextotp"
              >
                We have sent an OTP on the Applicant’s mobile number
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                className="enterOtp otplabel"
              >
                <Form.Item label="Enter OTP" name="otp">
                  <InputOTP
                    autoFocus
                    inputType="numeric"
                    length={4}
                    className="center-input-message"
                  />
                </Form.Item>
                <div className="details d-flex justify-content-center ">
                  <div className="otp-info">
                    Didn’t receive an OTP?{" "}
                    <span className="resendotp">Resend OTP</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal>
      </Col>
    </Row>
  );
};

export default BasicDetails;
