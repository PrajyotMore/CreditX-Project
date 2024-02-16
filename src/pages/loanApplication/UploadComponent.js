import React, { useState, useEffect } from 'react';
import { Col, Form, Upload, Button, Progress } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';

const UploadComponent = ({ name, label, validationMessage, showLabel = true }) => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
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

  const handleChange = (info) => {
    const { file } = info;
    if (!file) return;

    // Simulate upload progress (replace with actual upload logic)
    let progress = 0;
    const interval = setInterval(() => {
      progress = progress + 10;
      if (progress >= 100) {
        clearInterval(interval);
        setUploadProgress(0); // Reset progress for next upload
      } else {
        setUploadProgress(progress);
      }
    }, 500);

    // Read file as data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(file);
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Stop event propagation
    setFile(null);
    setImageUrl(null);
  };

  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={8} className="uploaddata p-0"
    >
      <Form.Item
        name={name}
        label={showLabel && label} // Render label conditionally based on showLabel prop
        rules={[
          {
            required: true,
            message: validationMessage || `Please upload ${label}`,
          },
        ]}
      >
        <Upload
          onChange={handleChange}
          showUploadList={false}
          beforeUpload={() => false} // Prevent default upload behavior
        >
          <Button
            icon={file ? null : <UploadOutlined />}
            className={windowWidth < 768 ? "uploaddata-mobile" : "uploadbtn"}
          >
            {uploadProgress > 0 && uploadProgress < 100 ? (
              <Progress percent={uploadProgress} />
            ) : file ? (
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="uploaded-image"
                  />
                </div>
                <div className="d-flex">
                  <div className="uploadtextwrapper">
                    <div className="filename">{file.name}</div>
                    <div className="clicktoview">Click to view</div>
                  </div>
                  <CloseOutlined
                    onClick={handleRemove}
                    className="remove-icon"
                  />
                </div>
              </div>
            ) : (
              <>
                {`Upload ${label}`}
                <p className="filetypetitle">
                  Only .pdf, .jpg allowed. File limit is 5MB
                </p>
              </>
            )}
          </Button>
        </Upload>
      </Form.Item>
    </Col>
  );
};

export default UploadComponent;
