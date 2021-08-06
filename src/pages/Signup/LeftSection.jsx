import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LeftSection = () => {
  return (
    <LeftSectionWrapper>
      <SignupTitle>
        <SignupMainTitle>IKEA 회원 가입</SignupMainTitle>
        <SignupSubTitle>
          이미 가입하셨나요?<ToLogin to="/login"> 로그인하기</ToLogin>
        </SignupSubTitle>
      </SignupTitle>
      <ImageWrapper>
        <img
          alt="1"
          src="https://images.unsplash.com/photo-1603512500383-f1f87c13ffc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="2"
          src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="3"
          src="https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="4"
          src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="5"
          src="https://images.unsplash.com/photo-1588082255003-1a93643ecf59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="6"
          src="https://images.unsplash.com/photo-1616627988170-8e7185217770?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="7"
          src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
        <img
          alt="8"
          src="https://images.unsplash.com/photo-1616627974167-821e652a63f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        ></img>
      </ImageWrapper>
    </LeftSectionWrapper>
  );
};

const LeftSectionWrapper = styled.div`
  width: 30vw;
  height: 100vh;
`;

const SignupTitle = styled.div`
  line-height: 2.3rem;
`;

const SignupMainTitle = styled.p`
  color: #0058a3;
  font-weight: bold;
  font-size: 2rem;
`;

const SignupSubTitle = styled.p`
  color: #646666;
  font-size: 0.9rem;
`;

const ToLogin = styled(Link)`
  border-bottom: 1px solid #646666;
`;

const ImageWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
  img {
    margin-bottom: 10px;
    width: 13rem;
    height: 240px;
    border-radius: 4px;
    margin-bottom: 0.4rem;
  }
`;

export default LeftSection;
