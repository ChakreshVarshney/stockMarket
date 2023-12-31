import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, List } from 'antd';
import '../App.css';

const { Title, Paragraph } = Typography;

const Home = () => {
  const theme = 'dark'; // Replace this with your theme logic or context usage

  return (
    <div>
      <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>Welcome to the Stock Market Dashboard!</Title>
      </div>
      <div className="container">
        <div className="overlay">
          <div className="text">

            <Typography>
             {/* / <Title className="title">Welcome to the Stock Market Dashboard!</Title> */}
              <Paragraph className="paragraph">
                The Stock Market Dashboard is an interactive platform designed to provide users with real-time
                stock market data and powerful analysis tools.
              </Paragraph>
              <Title level={2}>Key Features:</Title>
              <List
                bordered
                dataSource={[
                  'View different stock categories and sectors',
                  'Create your personalized dashboard',
                  'Real-time data visualization with interactive charts',
                  'Customizable settings for a tailored experience',
                ]}
                renderItem={item => <List.Item className="list">{item}</List.Item>}
              />
              <Title level={2}>Explore Now:</Title>
              <Paragraph className="paragraph">
                Get started by exploring our features
              </Paragraph>
            </Typography>
          </div>
        </div></div> </div>
  );
};

export default Home;
