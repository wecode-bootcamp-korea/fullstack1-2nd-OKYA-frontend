import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LoginFooter() {
  return (
    <Title>
      IKEA.kr -
      <PrivateLink
        to={{
          pathname:
            'https://www.ikea.com/kr/ko/customer-service/privacy-policy/',
        }}
        target="_blank"
      >
        개인정보처리방침
      </PrivateLink>
      <br />© Inter IKEA Systems B.V. 1999-2021
    </Title>
  );
}

const Title = styled.p`
  color: ${props => props.theme.white};
  font-size: 11px;
  line-height: 1.7em;
`;

const PrivateLink = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.white};
  font-size: 11px;
  text-align: center;
`;

export default LoginFooter;
