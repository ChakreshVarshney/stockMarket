import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Switch } from 'antd';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  LineChartOutlined,
  DashboardOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark'); // State to manage theme

  const handleThemeToggle = (checked) => {
    setTheme(checked ? 'dark' : 'light'); // Toggle between 'dark' and 'light' themes
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };


  const chartMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/stockDataChart">All Stocks</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/favDataChart">Favourite Stock</Link>
      </Menu.Item>
    </Menu>
  );

  // Remove the underline from the menu items
  const menuStyle = {
    borderBottom: 'none', 
    link: {
      textDecoration: 'none', // Remove underline from hyperlinks
    },
  }

  return (
    <div data-testid="header-component">
      {/* Menu content */}
      <Menu theme={theme} mode="horizontal" style={menuStyle}>
        <Menu.Item style={{ marginRight: 'auto' }}>
          <Link to="/" style={menuStyle.link}>
            <span>
              <strong>Stock Market Pulse</strong>
            </span>
          </Link>
        </Menu.Item>

        {isAuthenticated ? (
          <>
            <Menu.Item>
              <Link to="/" style={menuStyle.link}>
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/marketPulse" style={menuStyle.link}>
                <LineChartOutlined />
                Market Pulse
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/dashboard" style={menuStyle.link}>
                <DashboardOutlined />
                My Dashboard
              </Link>
            </Menu.Item>
            <Dropdown overlay={chartMenu}>
              <Menu.Item>
                <LineChartOutlined />
                Charts
              </Menu.Item>
            </Dropdown>
            <Menu.Item>
              <Link to="/aboutus" style={menuStyle.link}>
                <InfoCircleOutlined />
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ContactUs" style={menuStyle.link}>
                <ContactsOutlined />
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
              <LogoutOutlined />
              Logout
            </Menu.Item>

            {/* Theme toggle button */}
            <Menu.Item style={{ marginLeft: '10px', marginTop: '5px' }}>
              <Switch
                checked={theme === 'dark'}
                onChange={handleThemeToggle}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item>
              <Link to="/" style={menuStyle.link}>
                <HomeOutlined />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/register" style={menuStyle.link}>
                <UserAddOutlined />
                Register
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/aboutus" style={menuStyle.link}>
                <InfoCircleOutlined />
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/ContactUs" style={menuStyle.link}>
                <ContactsOutlined />
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/login" style={menuStyle.link}>
                <LoginOutlined />
                Login
              </Link>
            </Menu.Item>
            {/* Theme toggle button */}
            <Menu.Item style={{ marginLeft: '10px', marginTop: '5px' }}>
              <Switch
                checked={theme === 'dark'}
                onChange={handleThemeToggle}
                checkedChildren="Dark"
                unCheckedChildren="Light"
              />
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Header;
