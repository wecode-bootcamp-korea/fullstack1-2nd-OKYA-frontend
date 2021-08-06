import React from 'react';
import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import Blue_Logo from '../../pages/Login/Image/OKYA_logo_blue.png';
import ModalLower1 from './ModalLower1';
import ModalLower2 from './ModalLower2';

function Modal({ toggleInnermodal, innerShowModal, closeModal }) {
  return (
    <>
      <ModalBackground onClick={closeModal}></ModalBackground>
      <ModalContents>
        <TopWrapper>
          <CloseButton onClick={closeModal}>
            <ImCross />
          </CloseButton>
          <OKYALogo src={Blue_Logo} />
        </TopWrapper>
        {innerShowModal ? (
          <ModalLower2 toggleInnermodal={toggleInnermodal} />
        ) : (
          <ModalLower1 toggleInnermodal={toggleInnermodal} />
        )}
      </ModalContents>
    </>
  );
}

const ModalBackground = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

const ModalContents = styled.div`
  position: absolute;
  top: 0;
  background-color: white;
  width: 30rem;
  height: 100vh;
`;

const CloseButton = styled.button`
  display: block;
  width: 80px;
  background-color: white;
  border: 0;
  margin-right: 1rem;
  svg {
    width: 15px;
    height: 15px;
  }
`;

const TopWrapper = styled.div`
  display: flex;
  margin: 2rem 1rem;
`;

const OKYALogo = styled.img`
  width: 100px;
  height: 40px;
  padding-left: 10px;
`;

export default Modal;
