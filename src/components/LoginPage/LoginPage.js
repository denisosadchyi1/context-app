import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../Context";
import {Switch, Route, Redirect} from 'react-router';

const TestFFF = styled.div`
  width: 700px;
  height: 300px;
  margin: 100px auto;
  display: flex;
  justify-content: center;
`;

const LoginPage = () => {
  const props = useContext(Context);
  const {usernameEnter, passwordEnter, setPasswordEnter, setUsernameEnter, onHandleCheck, logged, rememberMeEnter, setRememberMeEnter} = props
  const { username, password, rememberMe } = props.state[0];
  return (
    <TestFFF>
      <form type="Submit">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
          </label>
          <input
            type="text"
            value={usernameEnter}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUsernameEnter(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={passwordEnter}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPasswordEnter(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            checked={rememberMeEnter}
            onChange={() => setRememberMeEnter(!rememberMeEnter)}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={(e) => onHandleCheck(e)}>
          Submit
        </button>
      </form>
      {
        localStorage.getItem('logged') ?  <Redirect to="/profile" />  : ''
        // localStorage.getItem('rememberMe') ?  <Redirect to="/profile" /> : '',
        // logged ? <Redirect to="/profile" /> : ''
      }
    </TestFFF>
  );
};

export default LoginPage;
