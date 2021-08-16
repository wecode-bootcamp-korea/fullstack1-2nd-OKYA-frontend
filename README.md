# OKYA Front-end 소개

<p align="center">
<img src="https://i.postimg.cc/rpYH4DT8/OKYA.jpg" alt="OKYA_IMAGE" />

### OKYA, 라이프 스타일을 큐레이팅 해드립니다.

- 가구 판매 사이트 [이케아](https://www.ikea.com/kr/ko/) 클론 프로젝트

## 💁🏻‍♂️ 💁🏻‍♀️ 팀원

---

- [최민기](https://github.com/samankey)
- [김민성](https://github.com/Minseongkimm)
- [오송미](https://github.com/songmiO)

## 📅 프로젝트 기간

---

2021.07.26 ~ 2021.08.10 (16일)

## 🔑 Skills

---

<br/>
<p align="center">
FrontEnd
<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/></a>
<img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat&logo=ReactRouter&logoColor=black"/></a>
<img src="https://img.shields.io/badge/ReactHook-61DAFB?style=flat"/></a>
<img src="https://img.shields.io/badge/ Styled-components-DB7093?style=flat&logo=styled-components&logoColor=white"/></a>
<img src="https://img.shields.io/badge/ JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/></a>
<br/>
<br/>

## 🛠 Tool

---

<br/>
<p align="center">
<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/></a>
<br/>
<br/>

## 구현 기능 상세

---

### 1. 공통 구현 사항

- 네비게이션바 / 사이드 메뉴
    - 메뉴 아이콘 클릭시 이중모달창 구현 (모든제품 -> 제품 카테고리리스트)
    - 카메라 아이콘 클릭시 이미지 검색 구현(이미지 첨부 기능까지만 구현 // 첨부 후 이미지검색 AI 구현X )
- Footer

### 2. 메인 페이지

- container로 사용할 Grid 레이아웃 환경구축
- Masonry 레이아웃(i.e. pinterest) 적용
- mockdata에서 이미지마다 가지고 있는 카테고리 Id를 이용하여 해당 버튼 클릭 시 filtering
- 더보기 버튼 사용시 지정 limit 단위로 데이터 받아오기

### 3. 상품 리스트 페이지

- 상품 분류 카드, 카테고리 바, 상품 카드 목록에 Grid 레이아웃 적용
- 리스트 페이지 상단의 상품 분류 카드를 mockdata로 부터 가져와 map 함수를 사용하여 상품 정보 카드 나열
- 상품 카드 정보를 mockdata로 부터 가져와 map 함수를 사용하여 상품 카드 나열
- 상품 카드 내, 상품 이미지 hover 시, 이미지 변경 및 장바구니 버튼 생성
- 상품 장바구니 버튼 클릭 시, ‘장바구니에 담김’을 알리는 ‘alert’ 메소드 구현
- 상품 장바구니에 담길 상품 정보를 담는 token 저장
- product 정보를 장바구니 버튼 클릭 시, 장바구니 페이지에 넘겨 주기 위해 fetch 내 백엔드API를 받아옴

### 4. 장바구니

- 장바구니 Read API와 연동
  - 유저의 토큰을 확인해서, 그 유저가 사용하는 장바구니를 출력
- 토큰이 존재하지 않을 때, 그리고 장바구니가 비었을 때 ‘장바구니가 비었습니다’ 메세지 출력
- 토큰 만료 시, 로그인 요청 dialog 출력 및 로그인 페이지로 리다이렉트

### 5. 로그인/회원가입

- 로그인
  카카오 소셜 로그인 구현(백엔드 통신 후 존재하는 유저 -> 로그인, 신규유저 -> 회원가입)
- 회원가입 기능 및 회원가입 성공 시 로그인 페이지로 이동
- Hook 활용하여 ID,PW 밸리데이션 및 애니메이션 구현

## Reference

---

- 이 프로젝트는 이케아 사이트를 참조하여 학습목적으로 만들었습니다. 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진과 동영상은 unsplash에서 공유받은 Free 이미지 및 동영상이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
