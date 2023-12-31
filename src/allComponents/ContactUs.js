import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';


const { Title } = Typography;

const ContactUs = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState('');

  const handleFormSubmit = () => {
    setResponse('Soon you will receive a response');
    // Add logic here to handle form submission
  };

  return (
    <div>
      <div className="about-section bg-primary">
        <Title level={2} className="text-center font-weight-bold my-4">
          Contact us
        </Title>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>
      </div>
      <br />
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <Form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                <Form.Item label="Your name">
                  <Input
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </Form.Item>
              </div>
              <div className="col-md-6">
                <Form.Item label="Your email">
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Item label="Subject">
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Form.Item label="Your message">
                  <Input.TextArea rows={2} />
                </Form.Item>
              </div>
            </div>
            <div className="text-center text-md-left" style={{ margin: '20px 0' }}>
              <Button type="primary" onClick={handleFormSubmit}>
                Send
              </Button>
            </div>
            <div className="status"></div>
          </Form>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Mumbai, India</p>
            </li>
            <li><i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 234 567 89</p>
            </li>
            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@companyname.com</p>
            </li>
          </ul>
        </div>
      </div>
      <h2>{response}</h2>
    </div>
  );
}

export default ContactUs;
