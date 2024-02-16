import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Progress, Row, Table, Upload } from 'antd';
import React from 'react';
import iconLeft from "../../assets/image/Icon Left.png";
import info from "../../assets/image/info.png";
import UploadComponent from './UploadComponent';
import { useEffect } from 'react';
import { useState } from 'react';

const columns1 = [
    {
      title: 'Document Type',
      dataIndex: 'documenttype',
      width: "10%", // Set width for the first column
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
      width: "10%", // Set width for the second column
      render: (text, record) => {
        // Render upload components based on document type
        if (record.documenttype === 'Aadhar Card') {
          return (
            <div>
              <UploadComponent label="Aadhar Front" showLabel={false} />
              <UploadComponent label="Aadhar Back" showLabel={false} />
            </div>
          );
        } else if (record.documenttype === 'PAN Card') {
          return (
            <UploadComponent label="PAN" showLabel={false}/>
          );
        } else {
          return (
            <UploadComponent label="Document" showLabel={false}/>
          )
        }
      },
    },
  ];

const data1 = [
  {
    key: '1',
    documenttype: 'PAN Card',
  },
  {
    key: '2',
    documenttype: 'Aadhar Card',
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
      width: "33.33%", // Set width for the first column
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
      width: "33.33%", // Set width for the second column
      render: (text, record) => {
        // Render components based on document type
        if (record.documenttype === 'Selfie/Live Video') {
          return (
            <div className='d-flex'><div className="verificationwrapper " style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={iconLeft} style={{ width: "20px", height: "20px" }} />
                  <div className="shareverification">Share Verification Link</div>
              </div><div className="infowrapper pl-3">
                      <img src={info} style={{ width: "16px", height: "16px" }} />
                      <div className="intotitleverification">
                          Customer has to visit the link and complete the verification process. The link is valid only for 30 mins.
                      </div>
                  </div></div>
          );
        } else {
          return (
            <div>
              <UploadComponent label="Document" showLabel={false}/>
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
  },
  {
    key: '2',
    documenttype: 'GST Certificate',
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <Row gutter={[16, { xs: 16, sm: 10, md: 16, lg: 16 }]}>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: window.innerWidth >= 768 ? 'flex' : 'block',flexDirection: window.innerWidth >= 768 ? 'row' : '', justifyContent: window.innerWidth >= 768 ? 'space-between' : 'inherit' }}>
    <div className="loandetailstitle">6 - Applicant Documents</div>
    <div className={`${window.innerWidth >= 768 ? 'd-flex flex-column' : ''}`} style={{ width: window.innerWidth >= 768 ? "40%" : "100%" }}>
      <div className={window.innerWidth >= 768 ? 'currentprogress' : 'currentprogress-hide'}>
        Current Progress
      </div>
      <div style={{ display: window.innerWidth >= 768 ? 'flex' : 'block' }}>
        <Progress percent={100} strokeColor="#003399" />
      </div>
    </div>
  </Col>
  
  

      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="uploadtable">
        <div className="loantitle">Applicant Documents</div>
       
        {windowWidth >= 768 ? (
            <Table columns={columns1} dataSource={data1} size="small" bordered pagination={false} />
          ) : (
            <div>
            {data1.map(item => (
              <Card key={item.key} style={{ marginBottom: '10px' }}>
                {columns1.map(column => (
                  <div key={column.dataIndex} className="uplaod-card" >
                    {column.dataIndex === 'mainapplicantdocument' ? (
                      <div>
                        <div style={{ marginBottom: '5px' }} className='cardcol-title'>{column.title}</div> {/* Display column name on a new line */}
                        <div>
                          {item.documenttype === 'Aadhar Card' && (
                            <div>
                              <UploadComponent label="Aadhar Front" showLabel={false} />
                              <UploadComponent label="Aadhar Back" showLabel={false} />
                            </div>
                          )}
                          {item.documenttype === 'PAN Card' && (
                              <UploadComponent label="PAN" showLabel={false}/>
                          )}
                          {item.documenttype !== 'Aadhar Card' && item.documenttype !== 'PAN Card' && (
                              <UploadComponent label="Document" showLabel={false}/>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Render other columns as text
                      <div>
                        <div className='cardcol-title'>{column.title}</div>
                        <div>{/* Display document type data on a new line */}
                          <p  className='columnval'>{item[column.dataIndex]}</p>
                          {item.documenttype === 'Bank Statement' && column.dataIndex === 'documenttype' && (
                            <p>For the last 6 months</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </Card>
            ))}
          </div>
          
          )}
          
      </Col>

      <Col xs={24} sm={24} md={24} lg={24} xl={24} className="uploadtable">
        <div className="loantitle">Entity Documents</div>
        {windowWidth >= 768 ? (
            <Table columns={columns2} dataSource={data2} size="small" bordered pagination={false} />
          ) : (
            <div>
            {data2.map(item => (
              <Card key={item.key} style={{ marginBottom: '10px' }}>
                {columns2.map(column => (
                  <div key={column.dataIndex} className="uplaod-card">
                    {column.dataIndex === 'mainapplicantdocument' ? (
                      <div>
                        <div style={{ marginBottom: '5px' }} className='cardcol-title'>{column.title}</div> {/* Display column name on a new line */}
                        <div>
                        <UploadComponent label="Document" showLabel={false}/>
                      </div>
                      </div>
                    ) : (
                      // Render other columns as text
                      <div>
                        <div>{column.title}</div>
                        <div>{/* Display document type data on a new line */}
                          <p className='columnval'>{item[column.dataIndex]}</p>
                          {item.documenttype === 'Bank Statement' && column.dataIndex === 'documenttype' && (
                            <p>For the last 6 months</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </Card>
            ))}
          </div>
          
          )}
                </Col>
    </Row>
  );
}

export default DocumentUpload;
