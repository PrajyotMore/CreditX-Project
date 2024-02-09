import { Button, Checkbox, Col, DatePicker, Form, Input, Progress, Row, Select, Upload } from "antd";
import "./LoanApplication.css";

import iconLeft from "../../assets/image/Icon Left.png";
import plusIcon from "../../assets/image/plus icon.png";
import info from "../../assets/image/info.png";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
const BasicDetails = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = (e) => {
      console.log("checked = ", e.target.checked);
      setIsChecked(e.target.checked);
    };
    return (
      <div className="loancontainer">
        <div className="d-flex flex-row justify-content-between ">
          <div className="loandetailstitle">2 - Applicant Details</div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
            <div className="currentprogress">Current Progress</div>
            <div>
              <Progress percent={20} strokeColor="#003399" />
            </div>
          </div>
        </div>
        <div className="loandetail">
          <div className="loantitle">Basic Details</div>
          <Form autoComplete="off" layout="vertical">
            <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                    // suffix={<p className="verifytext">VERIFY</p>}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <DatePicker format="dd/mm/yyyy" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" />
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
                  <img
                    src={iconLeft}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="shareverification">
                    Share Verification Link
                  </div>
                </div>
                <div className="infowrapper">
                  <img src={info} style={{ width: "16px", height: "16px" }} />
                  <div className="intotitleverification">
                    customer has to visit the link and complete the verification
                    process. the link is valid only for 30 mins.
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Form.Item
                  name="aadharcardfront"
                  label="Aadhar Card Front"
                  rules={[
                    {
                      required: true,
                      message: "Please enter adhar card front",
                    },
                  ]}
                  className="uploaddata"
                >
                  <Upload>
                    <Button icon={<UploadOutlined />} className="uploadbtn">
                      Upload Aadhar Front
                      <p className="filetypetitle">
                        Only .pdf, .jpg allowed. File limit is 5MB
                      </p>
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Form.Item
                  name="aadharcardback"
                  label="Aadhar Card Back"
                  rules={[
                    {
                      required: true,
                      message: "Please enter adhar card back",
                    },
                  ]}
                  className="uploaddata"
                >
                  <Upload>
                    <Button icon={<UploadOutlined />} className="uploadbtn">
                      Upload Aadhar Back
                      <p className="filetypetitle">
                        Only .pdf, .jpg allowed. File limit is 5MB
                      </p>
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}></Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" />
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
                  <img
                    src={iconLeft}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <div className="shareverification">
                    Share Verification Link
                  </div>
                </div>
                <div className="infowrapper">
                  <img src={info} style={{ width: "16px", height: "16px" }} />
                  <div className="intotitleverification">
                    customer has to visit the link and complete the verification
                    process. the link is valid only for 30 mins.
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  name="pancard"
                  label="PAN Card "
                  rules={[
                    {
                      required: true,
                      message: "Please enter pan card",
                    },
                  ]}
                  className="uploaddata"
                >
                  <Upload>
                    <Button icon={<UploadOutlined />} className="uploadbtn">
                      Upload PAN{" "}
                      <p className="filetypetitle">
                        Only .pdf, .jpg allowed. File limit is 5MB
                      </p>
                    </Button>
                  </Upload>
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <div className="d-flex justify-content-between">
                  <div className="permanentaddress">
                    Permanent Address Details
                  </div>
                  <div className="locatemap">Locate on Map</div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter Permanent Address" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter Permanent Address" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter Area" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter City" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter State" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter Country" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter PIN Code" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter Latitude" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                  <Input type="text" placeholder="Enter Longitude" />
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
                      <div className="locatemap">Locate on Map</div>
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter Current Address" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter Current Address" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter Area" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter City" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter State" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter Country" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter PIN Code" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter Latitude" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={8} xl={8}>
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
                      <Input type="text" placeholder="Enter Longitude" />
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
        </div>
      </div>
    );
  };

  export default BasicDetails;