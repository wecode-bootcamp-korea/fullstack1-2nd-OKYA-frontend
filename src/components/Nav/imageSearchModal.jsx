import React from 'react';
import styled from 'styled-components';
import { ImCross } from 'react-icons/im';
import { FiCamera } from 'react-icons/fi';
import { GiHazardSign } from 'react-icons/gi';

function ImageSearchModal({ toggleimagesearchmodal }) {
  const uploadImage = e => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append('file', img);
  };

  return (
    <>
      <ModalBackground onClick={toggleimagesearchmodal}></ModalBackground>
      <ModalContents>
        <ContentsWrapper>
          <CloseButton onClick={toggleimagesearchmodal}>
            <ImCross />
          </CloseButton>
          <Title>이미지로 IKEA 상품 검색하기</Title>
          <UploadButton>
            <UploadInput
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="prduct_img"
              multiple
              onChange={uploadImage}
            ></UploadInput>
            <Camera />
            <UploadButtonText>사진찍기 또는 업로드하기 </UploadButtonText>
          </UploadButton>
          <Caution>
            <CautionSign />
            <CautionText>
              Hej! 이미지는 검색 기능의 향상을 위해서만 사용됩니다. 개인 정보
              유출에 해당될 수 있는 이미지가 아닌지 유의해 주세요!
            </CautionText>
          </Caution>
          <MiddleTitle>
            또는 아래 이미지 중 하나를 클릭하여 사용해보세요
          </MiddleTitle>
          <ImageWrapper>
            <Image1 src="https://images.unsplash.com/photo-1603512500383-f1f87c13ffc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></Image1>
            <Image2 src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVkJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></Image2>
            <Image3 src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></Image3>
            <Image4 src="https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGtpdGNoZW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></Image4>
          </ImageWrapper>
          <HowtoWrapper>
            <HowtoTitle>어떻게 작동하나요?</HowtoTitle>
            <HowtoImage src="https://images.unsplash.com/photo-1548126761-75bb795a7d42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNlbGxwaG9uZSUyMGNhbWVyYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></HowtoImage>
            <HowtoText>
              방금 본 이름 모를 엄청난 의자를 찾고 있나요? 사진을 찍어보세요.
              이미지로 검색하여 가장 가까운 제품을 찾을 수 있습니다.
            </HowtoText>
          </HowtoWrapper>
        </ContentsWrapper>
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
  right: 0;
  background-color: white;
  border-radius: 10px;
  width: 30rem;
  height: 100vh;
  overflow: auto;
`;

const ContentsWrapper = styled.div`
  background-color: white;
  padding: 3rem 3rem;
  height: 100%;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
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

const Title = styled.p`
  margin-top: 2.2rem;
  margin-bottom: 1.8rem;
  font-weight: bold;
  font-size: 1.5625rem;
  line-height: 1.36;
  letter-spacing: -0.02625rem;
`;

const Camera = styled(FiCamera)`
  width: 1.4rem;
  height: 1.4rem;
`;

const UploadButton = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  background-color: black;
  color: white;
  border-radius: 20px;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadButtonText = styled.p`
  margin-left: 10px;
  padding-top: 5px;
`;

const Caution = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 0.75rem;
`;

const CautionSign = styled(GiHazardSign)`
  margin-right: 10px;
  width: 1.5rem;
  height: 1.5rem;
`;

const CautionText = styled.p`
  color: #646666;
`;

const MiddleTitle = styled.p`
  margin: 2rem 0;
  font-weight: bold;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 1px solid #a7adad;
  img {
    margin-bottom: 10px;
  }
`;

const Image1 = styled.img`
  width: 185px;
  height: 210px;
`;
const Image2 = styled.img`
  width: 185px;
  height: 210px;
`;
const Image3 = styled.img`
  width: 185px;
  height: 210px;
`;
const Image4 = styled.img`
  width: 185px;
  height: 210px;
`;

const HowtoWrapper = styled.div`
  margin-top: 2rem;
  padding-bottom: 30px;
`;

const HowtoTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 22px;
  font-weight: bold;
`;

const HowtoImage = styled.img`
  margin-bottom: 1rem;
  width: 380px;
  height: 230px;
`;

const HowtoText = styled.p`
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #a7adad;
  font-size: 0.9rem;
  color: #646666;
  line-height: 1.2rem;
`;

export default ImageSearchModal;
