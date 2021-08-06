import React, { useState } from 'react';
import Container from '../Container/Container';
import SideMenuButton from './SideMenuButton';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import SearchInput from './SearchInput';
import Icons from './Icons';
import Modal from './Modal';
import ImageSearchModal from './ImageSearchModal';
import styled from 'styled-components';

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [innerShowModal, setInnerShowModal] = useState(false);
  const [showImageSearchModal, setShowImageSearchModal] = useState(false);

  const openModal = e => {
    setShowModal(!showModal);
  };

  const closeModal = e => {
    setInnerShowModal(false);
    setShowModal(false);
  };

  const toggleInnermodal = e => {
    setInnerShowModal(!innerShowModal);
  };

  const toggleImageSearchModal = e => {
    setShowImageSearchModal(!showImageSearchModal);
  };

  return (
    <>
      <Container marginTop="20">
        <SideMenuButton openModal={openModal} />
        <NavLogo />
        <NavMenu openModal={openModal} />
        <SearchInput toggleImageSearchModal={toggleImageSearchModal} />
        <Icons />
        <ModalWrapper showModal={showModal}>
          <Modal
            closeModal={closeModal}
            innerShowModal={innerShowModal}
            toggleInnermodal={toggleInnermodal}
            openModal={openModal}
          />
        </ModalWrapper>
      </Container>
      <ImageModalWRapper showImageSearchModal={showImageSearchModal}>
        <ImageSearchModal toggleImageSearchModal={toggleImageSearchModal} />
      </ImageModalWRapper>
    </>
  );
}

const ModalWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.showModal ? '' : 'none')};
`;

const ImageModalWRapper = styled.aside`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.showImageSearchModal ? '' : 'none')};
`;

export default Nav;
