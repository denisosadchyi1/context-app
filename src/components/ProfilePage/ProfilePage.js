import React from 'react';
import styled from 'styled-components';

const ProfilePageWrapper = styled.div`
  width: 700px;
  margin: 100px auto;
  text-align: center;
  font-weight: 700;
  font-size: 65px;
`;


const ProfilePage = () => {
  return (
    <ProfilePageWrapper>
      <h1>Profile Page</h1>
    </ProfilePageWrapper>
  )
}

export default ProfilePage;