import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PwInput() {
  return (
    <>
      <InputPW placeholder="비밀번호" type="password" />
      <FindPW
        to={{
          pathname:
            'https://kr.accounts.ikea.com/login?state=hKFo2SBLcW4xdmVGMFFqMWdXX0dJcEZMWTZrcWpCd2ZaS095aqFupWxvZ2luo3RpZNkgMlgtMzc5XzNWRTczSVVCeVNwT2hZZUxCTTZwWk1kTjKjY2lk2SBtNUhWWk55RkkxME80OXNvZ1FRYjJVSVVzeVNzR1YyOQ&client=m5HVZNyFI10O49sogQQb2UIUsySsGV29&protocol=oauth2&redirect_uri=https%3A%2F%2Fwww.ikea.com%2Fkr%2Fko%2Fprofile%2Flogin%2F&response_type=code&ui_locales=ko-KR&code_chalenge=XDSIkY-mGvw0vMgNu000wE3nXzijQKwvKTJRW0tC5kw&code_chalenge_method=S256&scope=openid%20profile%20email&audience=https%3A%2F%2Fretail.api.ikea.com&registration=%7B%7D&consumer=OWF&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xNS4wIn0%3D&gasid=GA1.2.1613886412.1627366711',
        }}
        target="_blank"
      >
        비밀번호 찾기
      </FindPW>
    </>
  );
}

const InputPW = styled.input`
  margin-bottom: 5px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.darkgray};
  font-size: 0.875rem;
  line-height: 1.5;
`;

const FindPW = styled(Link)`
  color: ${props => props.theme.black};
  font-weight: bold;
  font-size: 12px;
`;

export default PwInput;
