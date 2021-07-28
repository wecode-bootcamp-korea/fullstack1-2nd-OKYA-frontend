import React from 'react';
import styled from 'styled-components';

function LoginDescription() {
  return (
    <>
      <Header>로그인</Header>
      <Detail>
        외워야 할 비밀번호가 많아 불편하셨죠? 이제 일회용 코드를 이용하여
        간편하게 로그인하세요.
        <br />
        <br />* 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
      </Detail>
    </>
  );
}

const Header = styled.h1`
  color: ${props => props.theme.yellow};
  font-size: 32px;
`;

const Detail = styled.p`
  color: ${props => props.theme.black};
  font-size: 14px;
  line-height: 20px;
  padding-top: 14px;
  margin-bottom: 0px;
`;

export default LoginDescription;
