import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

function RightSection(props) {
  const [values, setValues] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    roadAddress: '',
    detailAddress: '',
    zipCode: '',
  });

  const updateValue = e => {
    const { value, name } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log('values', values);

  const signup = () => {
    fetch('http://10.89.2.240:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        roadAddress: values.roadAddress,
        detailAddress: values.detailAddress,
        zipCode: values.zipCode,
      }),
    })
      .then(res => res.json())
      .then(result => {
        alert('OKYA 회원가입을 축하드립니다.!!');
        props.history.push('/');
      });
  };

  return (
    <RightSectionWrapper>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={values.name}
        onChange={updateValue}
      ></input>
      <input
        type="text"
        name="phoneNumber"
        placeholder="휴대폰번호"
        value={values.phoneNumber}
        onChange={updateValue}
      ></input>
      <FindAdress>우편번호 찾기</FindAdress>
      <input
        type="text"
        name="detailAddress"
        placeholder="상세주소"
        value={values.detailAddress}
        onChange={updateValue}
      ></input>
      <input
        type="text"
        name="roadAddress"
        placeholder="도로명주소"
        value={values.roadAddress}
        onChange={updateValue}
      ></input>
      <PostcodeInput
        type="text"
        name="zipCode"
        placeholder="우편번호"
        value={values.zipCode}
        onChange={updateValue}
      ></PostcodeInput>
      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={values.email}
        onChange={updateValue}
      ></input>
      <PasswordInput
        type="password"
        name="password"
        placeholder="비밀번호"
        value={values.password}
        onChange={updateValue}
      ></PasswordInput>
      <SignupSubmit onClick={signup}>입력 정보 제출하기</SignupSubmit>
    </RightSectionWrapper>
  );
}

const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 11rem;
  padding-right: 3rem;
  width: 45vw;
  height: 100vh;
  input {
    margin-top: 20px;
    margin-bottom: 30px;
    border: 0;
    border-bottom: 1px solid #646666;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const FindAdress = styled.button`
  width: 300px;
  height: 400px;
  background: #0058a3;
  border: 0;
  color: #ffffff;
  border-radius: 40px;
  padding: 0 2.5rem;
`;

const PostcodeInput = styled.input`
  width: 400px;
`;

const PasswordInput = styled.input`
  width: 400px;
`;

const SignupSubmit = styled.button`
  margin-top: 20px;
  width: 400px;
  height: 400px;
  background: black;
  border: 0;
  color: #ffffff;
  border-radius: 40px;
  padding: 0 2.5rem;
`;

export default withRouter(RightSection);
