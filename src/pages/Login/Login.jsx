import React from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';
import Description from './Description';
import LoginFooter from './LoginFooter';
import IdInput from './IdInput';
import PwInput from './PwInput';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import KakaoButton from './KakaoButton';
import WhiteLogo from './WhiteLogo';

function Login() {
  return (
    <Wrapper>
      <LeftSection>
        <Arrow />
        <LeftBox>
          <WhiteLogo />
          <Description />
          <LoginFooter />
        </LeftBox>
      </LeftSection>
      <RightSection>
        <div>
          <IdInput />
          <PwInput />
        </div>
        <div>
          <SignInButton />
          <SignUpButton />
          <KakaoButton />
        </div>
      </RightSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  width: 100vw;
  min-height: 100vh;
`;

const LeftSection = styled.div`
  display: flex;
  grid-column: 1 / 6;
  background-color: ${props => props.theme.blue};
`;

const LeftBox = styled.div`
  display: flex;
  padding: 2rem 5rem;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSection = styled.div`
  position: relative;
  top: 15rem;
  grid-column: 7 / 14;
  line-height: 2.71em;
  width: 28rem;
`;

export default Login;
