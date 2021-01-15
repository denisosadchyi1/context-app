import React from 'react';
import styled from 'styled-components';

const NewsWrapper = styled.div`
  h1{
    font-size: 45px;
  }
  width: 700px;
  margin: 100px auto;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
`;


const News = () => {
  return (
    <NewsWrapper>
      <h1>News: Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolorum natus, quam quas, repellendus quo fugiat facere, recusandae reprehenderit possimus asperiores veritatis voluptas. Aperiam quae consectetur ea, labore harum veniam.</h1>
    </NewsWrapper>
  )
}

export default News;