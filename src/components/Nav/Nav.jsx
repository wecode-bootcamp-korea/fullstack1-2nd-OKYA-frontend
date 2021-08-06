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
  const [showModal, setshowModal] = useState(false);
  const [innershowModal, setinnershowModal] = useState(false);
  const [showImageSearchModal, setshowImageSearchModal] = useState(false);

  const openmodal = e => {
    setshowModal(!showModal);
  };

  const closemodal = e => {
    setinnershowModal(false);
    setshowModal(false);
  };

  const innertogglemodal = e => {
    setinnershowModal(!innershowModal);
  };

  const toggleimagesearchmodal = e => {
    setshowImageSearchModal(!showImageSearchModal);
  };

  return (
    <>
      <Container marginTop="20">
        <SideMenuButton openmodal={openmodal} />
        <NavLogo />
        <NavMenu openmodal={openmodal} />
        <SearchInput toggleimagesearchmodal={toggleimagesearchmodal} />
        <Icons />
        <ModalWrapper showModal={showModal}>
          <Modal
            closemodal={closemodal}
            innershowModal={innershowModal}
            innertogglemodal={innertogglemodal}
            openmodal={openmodal}
          />
        </ModalWrapper>
      </Container>
      <ImageModalWRapper showImageSearchModal={showImageSearchModal}>
        <ImageSearchModal toggleimagesearchmodal={toggleimagesearchmodal} />
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
