import { UploadOutlined } from '@ant-design/icons';
import { Button, Col, Progress, Row, Table, Upload } from 'antd';
import React from 'react';
import iconLeft from "../../assets/image/Icon Left.png";
import info from "../../assets/image/info.png";

const columns1 = [
  {
    title: 'Document Type',
    dataIndex: 'documenttype',
    render: (text, record) => {
      if (record.documenttype === 'Bank Statement') {
        return (
          <div>
            <span>{text}</span>
            <div className='lastsixmonthtext'>
              For the last 6 months
            </div>
          </div>
        );
      } else {
        return <span>{text}</span>;
      }
    },
  },
  {
    title: 'Main Applicant Document',
    dataIndex: 'mainapplicantdocument',
    render: (text, record) => {
      if (record.documenttype === 'Aadhar Card') {
        return (
          <div>
            <Upload>
              <Button icon={<UploadOutlined />} style={{width:'385px',height:'55px',marginBottom:'8px'}} className="uploadbtn">
                Upload Aadhar Front
              </Button>
            </Upload>
            <Upload>
              <Button icon={<UploadOutlined />} style={{width:'385px',height:'55px'}} className="uploadbtn">
                Upload Aadhar Back
              </Button>
            </Upload>
          </div>
        );
      } else {
        return (
            <div>
            <Upload>
              <Button icon={<UploadOutlined />} className="uploadbtn" style={{width:'385px',height:'55px'}}>
                Upload Document
                <p className="filetypetitle">
                      Only .pdf, .jpg allowed. File limit is 5MB
                    </p>
              </Button>
            </Upload>
          </div>
        );
      }
    },
  },
];

const data1 = [
  {
    key: '1',
    documenttype: 'PAN Card',
    extraInfo: '', // No extra info for PAN Card
  },
  {
    key: '2',
    documenttype: 'Aadhar Card',
    extraInfo: '', // No extra info for PAN Card
  },
  {
    key: '3',
    documenttype: 'Bank Statement',
    extraInfo: 'For the last 6 months', 
  },
];




const columns2 = [
    {
        title: 'Document Type',
        dataIndex: 'documenttype',
        render: (text, record) => {
          if (record.documenttype === 'Bank Statement') {
            return (
              <div>
                <span>{text}</span>
                <div className='lastsixmonthtext'>
                  For the last 6 months
                </div>
              </div>
            );
          } else {
            return <span>{text}</span>;
          }
        },
      },
      {
        title: 'Main Applicant Document',
        dataIndex: 'mainapplicantdocument',
        render: (text, record) => {
          if (record.documenttype === 'Selfie/Live Video') {
            return (
              <div className='d-flex'>
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
              </div>
            );
          } else {
            return (
                <div>
                <Upload>
                  <Button icon={<UploadOutlined />} className="uploadbtn" style={{width:'385px',height:'55px'}}>
                    Upload Document
                    <p className="filetypetitle">
                          Only .pdf, .jpg allowed. File limit is 5MB
                        </p>
                  </Button>
                </Upload>
              </div>
            );
          }
        },
      },
    ];
  
  const data2 = [
    {
      key: '1',
      documenttype: 'Company PAN',
      extraInfo: '', // No extra info for PAN Card
    },
    {
      key: '2',
      documenttype: 'GST Certificate',
      extraInfo: '', // No extra info for PAN Card
    },
    {
      key: '3',
      documenttype: 'Bank Statement',
      extraInfo: 'For the last 6 months', 
    },
    {
        key: '4',
        documenttype: 'Residence Photo',
      },
      {
        key: '6',
        documenttype: 'Selfie/Live Video',
      },
      {
        key: '7',
        documenttype: 'Financial Assessment Sheet',
      },
      {
        key: '8',
        documenttype: 'Other Required Document',
      },
      

  ];

const DocumentUpload = () => {
  return (
    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="d-flex flex-row justify-content-between ">
          <div className="loandetailstitle">6 - Applicant Documents</div>
          <div className="d-flex flex-column" style={{ width: "40%" }}>
              <div className="currentprogress">Current Progress</div>
              <div>
                  <Progress percent={100} strokeColor="#003399" />
              </div>
          </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="loandetail">
      <div className="loantitle">Applicant Documents</div>
    <Table columns={columns1} dataSource={data1} size="small" bordered pagination={false}/>
    </Col>

    <Col xs={24} sm={24} md={24} lg={24} xl={24} className="loandetail">
      <div className="loantitle">Entity Documents</div>
    <Table columns={columns2} dataSource={data2} size="small" bordered pagination={false}/>
    </Col>
    </Row>
  );
}

export default DocumentUpload;
