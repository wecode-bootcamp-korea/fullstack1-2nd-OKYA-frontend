import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function IdInput() {
  return (
    <>
      <InputID placeholder="이메일 또는 휴대폰 번호" type="text" />
      <TitleBox>
        <Title>아이디를 잊으셨나요?:</Title>
        <FindID to="/login"> 아이디/이메일 찾기</FindID>
      </TitleBox>
    </>
  );
}

const InputID = styled.input`
  margin-bottom: 5px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.darkgray};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.p`
  font-size: 11px;
  color: ${props => props.theme.black};
`;

const FindID = styled(Link)`
  margin-left: 0.5rem;
  color: ${props => props.theme.black};
  font-weight: bold;
  font-size: 12px;
`;

export default IdInput;
