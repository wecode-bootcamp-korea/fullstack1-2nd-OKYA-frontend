import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function IdInput() {
  const [isvalid, setIsvalid] = useState(false);
  const [email, setEmail] = useState(null);

  const onChangeEmail = e => {
    const { value } = e.target;

    setEmail(value);
    setIsvalid(value.includes('@' && '.') && value !== null);
  };

  const inputFocus = e => {
    setIsvalid(true);
  };

  return (
    <>
      <InputID
        type="text"
        id="username"
        name="email"
        onFocus={inputFocus}
        onChange={onChangeEmail}
        isValid={isvalid}
        email={email}
      />
      <Label fontSize={email} htmlFor="username">
        이메일 또는 휴대폰 번호
      </Label>
      <TitleBox>
        <Title>아이디를 잊으셨나요?:</Title>
        <FindID to="/login">아이디/이메일 찾기</FindID>
      </TitleBox>
    </>
  );
}

const InputID = styled.input`
  margin-bottom: 5px;
  width: 100%;
  border: 0;
  border-bottom: ${props =>
    props.isValid === false
      ? props.email === null
        ? '1px solid #929292'
        : '2px solid #e00751'
      : '2px solid #0058a3'};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Label = styled.label`
  position: absolute;
  left: 0.1rem;
  top: ${props => (props.fontSize ? '-1.5rem' : 0)};
  color: ${props => props.theme.darkgray};
  font-size: ${props => (props.fontSize ? '7px' : '16px')};
  transition: all 0.3s ease-in-out;
`;

const TitleBox = styled.div`
  display: flex;
  margin-top: -10px;
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
