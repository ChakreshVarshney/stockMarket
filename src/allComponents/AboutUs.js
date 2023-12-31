import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';

const { Title, Text } = Typography;

const AboutUs = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#1890ff', padding: '40px 0', textAlign: 'center' }}>
        <Title style={{ color: 'white' }}>About Us Page</Title>
        <Text style={{ color: 'white' }}>
          Some text about who we are and what we do. Resize the browser window to see that this page is responsive by the way.
        </Text>
      </div>

      <Title level={2} style={{ textAlign: 'center', marginTop: '40px' }}>Our Team</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <img
              src="https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg"
              alt="Jane"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Title level={4}>Jane Doe</Title>
              <Text strong>CEO & Founder</Text>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@example.com</Text>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <img
              src="https://coenterprises.com.au/wp-content/uploads/2018/02/male-placeholder-image.jpeg"
              alt="John"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Title level={4}>John Doe</Title>
              <Text strong>Designer</Text>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>john@example.com</Text>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
