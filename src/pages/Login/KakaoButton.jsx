import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function KakaoButton() {
  return (
    <>
      <Wrapper onClick={loginWithKakao}>카카오 로그인</Wrapper>
      <LogoutButton onClick={kakaoLogout}>카카오 로그아웃</LogoutButton>
    </>
  );
}

const loginWithKakao = () => {
  window.Kakao.Auth.login({
    scope: 'profile_nickname, profile_image, account_email, gender, birthday',
    success: authObj => {
      console.log('authObj:토큰확인', authObj);
      // 로그인 성공시 토큰 발급 받음
      axios('지현ip/kakao/signup', {
        //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다.
        headers: {
          'Content-Type': 'application/json',
          Authorization: authObj.access_token,
          //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다.
        },
      }).then(res => {
        localStorage.setItem('token', res.data.token);
        //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
        alert('로그인 되었습니다.');
        this.props.history.push('/');
      });
    },
    fail: error => {
      alert(JSON.stringify(error));
    },
  });
};

const kakaoLogout = () => {
  if (window.Kakao.Auth.getAccessToken()) {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    console.log('로그아웃이 완료되었습니다.');
    window.Kakao.Auth.setAccessToken(undefined);
  }
};

const Wrapper = styled.button`
  margin-top: 15px;
  height: 3.5rem;
  width: 100%;
  background-color: #fee500;
  color: #000000 85%;
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  border-radius: 40px;
`;

const LogoutButton = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 3.5rem;
  background: ${props => props.theme.darkgray};
  border-radius: 40px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
`;

export default withRouter(KakaoButton);
