// ErrorPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <Heading>404 - Page Not Found</Heading>
      <Paragraph>Oops! The page you are looking for does not exist.</Paragraph>
      <StyledLink to="/">Go to Home</StyledLink>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
