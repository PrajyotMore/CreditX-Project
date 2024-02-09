import { Col, Form, Input, Progress, Radio, Row, Select } from 'antd'
import React, { useState } from 'react'

const LoanDetails = () => {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
      };
  return (
    <div className="loancontainer">
    <div className="d-flex flex-row justify-content-between ">
              <div className="loandetailstitle">1 - Loan Details</div>
              <div className="d-flex flex-column" style={{ width: "40%" }}>
                <div className="currentprogress">Current Progress</div>
                <div>
                  <Progress percent={10} strokeColor="#003399" />
                </div>
              </div>
            </div>
            <div className="loandetail">
              <div className="loantitle">Loan Details</div>
              <div className="d-flex flex-column">
                <div className="typeloan">Type of Loan</div>
                <Radio.Group onChange={onChange} value={value} className="pb-3">
                  <Radio value={1}>Term Loan</Radio>
                  <Radio value={2}>SME Loan</Radio>
                </Radio.Group>
                <Form autoComplete="off" layout="vertical">
                  <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                      <Form.Item
                        name="loanamount"
                        label="Loan Amount"
                        rules={[
                          {
                            required: true,
                            message: "Please enter loan amount",
                          },
                        ]}
                      >
                        <Input type="text" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                      <Form.Item
                        name="tenure"
                        label="Tenure"
                        rules={[
                          {
                            required: true,
                            message: "Please enter tenure",
                          },
                        ]}
                      >
                        <Select>
                          <option></option>
                          <option></option>
                          <option></option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                      <Form.Item
                        name="purposeofloan"
                        label="Purpose Of Loan"
                        rules={[
                          {
                            required: true,
                            message: "Please enter purpose of loan",
                          },
                        ]}
                      >
                        <Select>
                          <option></option>
                          <option></option>
                          <option></option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
                    <Col
                      xs={24}
                      sm={24}
                      md={24}
                      lg={24}
                      xl={24}
                      className="emidetails"
                    >
                      EMI Details
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className="data">
                      <div className="number">20,000 </div>
                      <div className="emititle"> EMI amount </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className="data">
                      <div className="number"> 1,200 </div>
                      <div className="emititle"> Processing Fees </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className="data">
                      <div className="number"> 9.25 </div>
                      <div className="emititle"> Rate of Interest (%) </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6} className="data">
                      <div className="number"> NIL </div>
                      <div className="emititle"> Any Other Charges </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            </div>

  )
}

export default LoanDetails
