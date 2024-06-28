# 스토리북

npm에 배포하기 위하여 만들어진 스토리북 샘플 레포지토리 입니다.

## 스토리북 로컬 실행

- npm run storybook

## 새로운 컴포넌트 추가 시

1. stories 폴더 아래로 컴포넌트 폴더 생성
2. 생성된 폴더 안에 컴포넌트명.stories.ts 파일을 만든다.
   2-1.stories 파일에서 title은 경로를 의미한다.
   2-2.layout은 컴포넌트가 보여질 형식을 의미한다.
   2-3. export 로 변수타입을 내보낸다.
3. src/index.ts 에서 추가된 컴포넌트의 위치를 export 한다.

## npm 배포

- package.json의 상단 version 수정 푸쉬 후
- npm publish

## chromatic 배포

- npm run chromatic

https://www.chromatic.com/build?appId=64e5aa9d2c6b31e96ff80703

https://www.chromatic.com/

## 실제 사용

ex)
import { Button } from "cherry-cock-ui";

## ui

모든 ui는 따로 수정이 가능하게.

- 아토믹 개념으로 해야할지?

### 컴포넌트 단위

어디까지 사용자의 제약을 줄지 에 대해 고민하기

- 단순 컴포넌트 단위까지 할것인지.
- 형식이 정해져있는 molecus 단위까지 할것인지

- button []
  - 테마, 사이즈, width-full 여부
- modal []
  - dim 유무, dim 클릭 유무, 이벤트-닫기, 사이즈
- toast []
  - 방향, 위치, 속도
- snackbar []
  - 보여지는 속도, 사라지는 속도, 닫기 여부, 스택형
- motionlayer []
  - 여러 모션들. framer-motion 처럼 모션 자체를 정의하는 감싸는 용도의 레이어
- timer progress []
  - 칸 갯수, 총 시간, 시작타이밍
- counter ui []
  - 버튼 위치
- tag []
  - 사이즈
- tooltip []
  - 열리는 방향
- form/input []
  width-full 여부

### 컴포넌트보다 큰 애들 (추후)

- 사이드바
- 헤더
- 푸터
- 카드리스트
- sheet []
  - 열고/닫고, 트랜지션, 내부에 모션이 없는 다른 컴포넌트 가능.

아토믹 패턴 유무가 들어갈수 있다.
