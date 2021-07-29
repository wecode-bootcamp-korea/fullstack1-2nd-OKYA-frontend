import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PwInput() {
  const [isvalid, setIsvalid] = useState(false);
  const [password, setPassword] = useState(null);

  const onChangePassword = e => {
    const { value } = e.target;

    setPassword(value);
    setIsvalid(value.length >= 8 && value !== null);
  };

  const inputFocus = e => {
    setIsvalid(true);
  };

  return (
    <>
      <InputPW
        type="password"
        id="userPassword"
        name="password"
        onFocus={inputFocus}
        onChange={onChangePassword}
        isValid={isvalid}
        password={password}
      />

      <Label htmlFor="userPassword" fontSize={password}>
        비밀번호
      </Label>
      <TitleBox>
        <FindPW
          to={{
            pathname:
              'https://kr.accounts.ikea.com/login?state=hKFo2SBLcW4xdmVGMFFqMWdXX0dJcEZMWTZrcWpCd2ZaS095aqFupWxvZ2luo3RpZNkgMlgtMzc5XzNWRTczSVVCeVNwT2hZZUxCTTZwWk1kTjKjY2lk2SBtNUhWWk55RkkxME80OXNvZ1FRYjJVSVVzeVNzR1YyOQ&client=m5HVZNyFI10O49sogQQb2UIUsySsGV29&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.ikea.com%2Fkr%2Fko%2Fprofile%2Flogin%2F&response_type=code&ui_locales=ko-KR&code_chalenge=XDSIkY-mGvw0vMgNu000wE3nXzijQKwvKTJRW0tC5kw&code_chalenge_method=S256&scope=openid%20profile%20email&audience=https%3A%2F%2Fretail.api.ikea.com&registration=%7B%7D&consumer=OWF&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xNS4wIn0%3D&gasid=GA1.2.1613886412.1627366711',
          }}
          target="_blank"
        >
          비밀번호 찾기
        </FindPW>
      </TitleBox>
    </>
  );
}

const InputPW = styled.input`
  margin-bottom: 5px;
  width: 100%;
  border: 0;
  border-bottom: ${props =>
    props.isValid === false
      ? props.password === null
        ? '1px solid #929292'
        : '2px solid #e00751'
      : '2px solid #0058a3'};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Label = styled.label`
  position: absolute;
  left: 0.1rem;
  top: ${props => (props.fontSize ? '3.3rem' : '4.8rem')};
  color: ${props => props.theme.darkgray};
  font-size: ${props => (props.fontSize ? '7px' : '16px')};
  transition: all 0.3s ease-in-out;
`;

const FindPW = styled(Link)`
  color: ${props => props.theme.black};
  font-weight: bold;
  font-size: 12px;
`;
const TitleBox = styled.div`
  margin-top: -10px;
`;

export default PwInput;
