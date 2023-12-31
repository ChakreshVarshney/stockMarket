import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      login();
      navigate('/marketPulse', { state: { username } });
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <section className="vh-100 ant-custom-container">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="form-outline mb-4 ant-form-item" >
                <Input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  addonBefore={<UserOutlined className="site-form-item-icon" /> }
                  
                />
              </div>

              <div className="form-outline mb-3 ant-form-item">
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  addonBefore={<LockOutlined className="site-form-item-icon" />}
                />
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  type="button"
                  id="login-button"
                  className="btn btn-primary btn-lg ant-btn ant-btn-lg"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
