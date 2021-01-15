import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 700px;
  margin: 100px auto;
  text-align: center;
  font-weight: 700;
  font-size: 65px;
`;


const Main = () => {
  return (
    <MainWrapper>
      <h1>Main Page</h1>
    </MainWrapper>
  )
}

export default Main;