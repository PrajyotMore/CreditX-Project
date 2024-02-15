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
} from "antd";
import maps from "../../assets/image/map.png";
import React, { useState } from "react";
import "./LoanApplication.css";
import Upload from "rc-upload";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
const EntityDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    console.log("checked = ", e.target.checked);
    setIsChecked(e.target.checked);
  };
  const showModalMap = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
      <Col  xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex flex-row justify-content-between ">
        <div className="loandetailstitle">4 - Entity Details</div>
        <div className="d-flex flex-column" style={{ width: "40%" }}>
          <div className="currentprogress">Current Progress</div>
          <div>
            <Progress percent={60} strokeColor="#003399" />
          </div>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="loandetail">
        <Form autoComplete="off" layout="vertical">
          <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Checkbox
                name="isbusinessisregistered"
                checked={isChecked}
                onChange={handleCheckboxChange}
              >
                Is your business registered?
              </Checkbox>
            </Col>
            {isChecked ? (
              <>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  className="loantitle"
                >
                  Business Details
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item
                    name="entityname"
                    label="Entity Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter entity name",
                      },
                    ]}
                  >
                    <Input type="text" size="large" placeholder="Enter Entity Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item
                    name="typeofcomapany"
                    label="Type Of Company"
                    rules={[
                      {
                        required: true,
                        message: "Please enter type of company",
                      },
                    ]}
                    style={{ width: "100%" }}
                  >
                    <Select placeholder="Select"  size="large">
                      <option></option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item
                    name="monthlysales"
                    label="Monthly Sales"
                    rules={[
                      {
                        required: false,
                        message: "Please enter monthly sales",
                      },
                    ]}
                  >
                    <Input type="number"  size="large" placeholder="15,000" disabled />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item
                    name="pannumber"
                    label="PAN Number"
                    rules={[
                      {
                        required: true,
                        message: "Please enter pan number",
                      },
                    ]}
                  >
                    <Input type="number"  size="large" placeholder="GHYRM2585U" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    name="pancard"
                    label="PAN Card"
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
                        Upload PAN
                        <p className="filetypetitle">
                          Only .pdf, .jpg allowed. File limit is 5MB
                        </p>
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item
                    name="dateofincorporation"
                    label="Date Of Incorporation"
                    rules={[
                      {
                        required: true,
                        message: "Please enter date",
                      },
                    ]}
                  >
                    <DatePicker
                    size="large"
                      placeholder="DD/MM/YYYY"
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                  <Form.Item
                    name="dateofincorporation"
                    label="Date Of Incorporation"
                    rules={[
                      {
                        required: true,
                        message: "Please enter date",
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
                    name="sharwinbusinessorpartnership"
                    label="% Shares in Business or Partnership?"
                    rules={[
                      {
                        required: true,
                        message: "Please enter share percentage",
                      },
                    ]}
                  >
                    <Input type="number" placeholder="Enter Share percentage"  size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                 <div className="d-flex justify-content-between">
                <div className="loantitle">Address Details</div>
                <div className="locatemap" onClick={showModalMap}>Locate on Map</div>
              </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="addressline1"
              label="Address Line 1"
              rules={[
                {
                  required: true,
                  message: "Please enter address",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Address"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="addressline2"
              label="Address Line 2"
              rules={[
                {
                  required: true,
                  message: "Please enter address",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Address"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="area"
              label="Area"
              rules={[
                {
                  required: true,
                  message: "Please enter area",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Area"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="city"
              label="City"
              rules={[
                {
                  required: true,
                  message: "Please enter city",
                },
              ]}
            >
              <Input type="number" placeholder="Enter City"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="state"
              label="State"
              rules={[
                {
                  required: true,
                  message: "Please enter state",
                },
              ]}
            >
              <Input type="number" placeholder="Enter State"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="country"
              label="Country"
              rules={[
                {
                  required: true,
                  message: "Please enter country",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Country"  size="large" />
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
              <Input type="number" placeholder="Enter PIN Code"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="latitude"
              label="Latitude"
              rules={[
                {
                  required: true,
                  message: "Please enter latitude",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Latitude"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="longitude"
              label="Longitude"
              rules={[
                {
                  required: true,
                  message: "Please enter longitude",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Longitude"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              Financial Details
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="monthlynetsalesincome"
              label="Monthly net sales income"
              rules={[
                {
                  required: true,
                  message: "Please enter net income",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Monthly net sales"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="cashbalancecompany"
              label="Cash Balance Of The Company"
              rules={[
                {
                  required: false,
                  message: "Please enter net income",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Cash Balance"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="networth"
              label="Net Worth"
              rules={[
                {
                  required: false,
                  message: "Please enter net income",
                },
              ]}
            >
              <Input type="number" placeholder="Net Worth"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="noofemployees"
              label="No Of Employees"
              rules={[
                {
                  required: false,
                  message: "Please enter no of employee",
                },
              ]}
            >
              <Input type="number" placeholder="Enter No of Employees"  size="large" />
            </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <Form.Item
              name="salesprojectionfornexttwoyears"
              label="Sales projections for next two years"
              rules={[
                {
                  required: false,
                  message: "Please enter sales projection",
                },
              ]}
            >
              <Input type="number" placeholder="Enter Sales projections"  size="large" />
            </Form.Item>
              </Col>
              </>
            ) : null}
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
              <Input placeholder="Search" suffix={<SearchOutlined/>}/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="m-2">
                <img src={maps} width="100%" />
              </div>
            </Col>
          </div>
        </Row>
      </Modal>
      </Col>
    </Row>
  );
};

export default EntityDetails;
