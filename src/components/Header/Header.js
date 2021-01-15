import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const HeaderWrapepr = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const GlobalStyles = createGlobalStyle`
  .active{
  color: gold;
}
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 25px;
  cursor: pointer;
  font-weight: 600;
  color: green;
  a.test {
    color: red;
  }
`;

const Item = styled.div`

  a.active {
    color: gold;
  }
`;

const Header = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
        <HeaderWrapepr>
          <Item>
            <CustomNavLink to="/" exact>Main Page</CustomNavLink>
          </Item>
          <Item>
            <CustomNavLink to="/login">Login Page</CustomNavLink>
          </Item>
          <Item>
            <CustomNavLink to="news">News Page</CustomNavLink>
          </Item>
          <Item>
            <CustomNavLink to="profile">Profile Page</CustomNavLink>
          </Item>
        </HeaderWrapepr>
    </React.Fragment>
  )
}

export default Header;