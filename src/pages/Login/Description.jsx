import React from 'react';
import styled from 'styled-components';

function Description() {
  return (
    <Wrapper>
      <Header>로그인</Header>
      <Detail>
        외워야 할 비밀번호가 많아 불편하셨죠? <br />
        이제 일회용 코드를 이용하여 간편하게 로그인 하세요.
        <br />
        <br />* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
      </Detail>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: flex-start;
  max-width: 16rem;
`;

const Header = styled.h1`
  color: ${props => props.theme.yellow};
  font-weight: 700;
  font-size: 32px;
  letter-spacing: -0.04rem;
`;

const Detail = styled.p`
  padding-top: 14px;
  margin-bottom: 0px;
  color: ${props => props.theme.white};
  font-size: 14px;
  line-height: 1.3em;
`;

export default Description;
