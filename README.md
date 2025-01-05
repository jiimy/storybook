# 스토리북

## 스토리북 로컬 실행

- npm run storybook

## 새로운 컴포넌트 추가 시

1. stories 폴더 아래로 컴포넌트 폴더 생성
2. 생성된 폴더 안에 컴포넌트명.stories.ts 파일을 만든다.
   2-1.stories 파일에서 title은 경로를 의미한다.
   2-2.layout은 컴포넌트가 보여질 형식을 의미한다.
   2-3. export 로 변수타입을 내보낸다.
3. src/index.ts 파일 수정

- 새로 추가된 컴포넌트와 props를 export한다.

```ts
//ex
export { default as Button } from './stories/button/Button';
export type { ButtonProps } from './stories/button/Button';
```

4. src/index.d.ts 파일 수정

- 새로 추가된 컴포넌트의 모든것을 export 한다.

```ts
// ex
export * from './stories/button/Button';
```

//TODO: index.d.ts 에서 \* 로 되는걸 보면 index.ts에서도 되는지 테스트해보기
//TODO: types 폴더 ignore 해도 npm에 적용이 되는지 테스트해보기

## npm 배포

- package.json의 상단 version 수정 푸쉬 후
  ┗ 푸쉬 안하고 배포 해도되지만 버전관리를 편하게 하기 위함.
  ┗ 만약 푸쉬하지 않고 배포를 테스트 한다면, npm 에 가서 가장 최신버전 확인 후 배포하며 동시에 여러명이 배포 하지 않기
- npm run build
- npm publish

## github 에 스토리북 배포

- npm run deploy

https:깃헙네임.github/io/스토리북레포명
으로 배포됨.

## chromatic 배포

- npm run chromatic

https://www.chromatic.com/build?appId=64e5aa9d2c6b31e96ff80703

https://www.chromatic.com/

## 실제 사용

ex)

```node
import { Button } from 'snow-white-ui';
import 'snow-white-ui/build/styles/global.scss'; // npm에 포함된 스타일파일 사용시
```

## ui

모든 ui는 따로 수정이 가능하게.

- 아토믹 개념으로 해야할지?

### 컴포넌트 단위

어디까지 사용자의 제약을 줄지 에 대해 고민하기

- 단순 컴포넌트 단위까지 할것인지.
- 형식이 정해져있는 molecus 단위까지 할것인지

- o 완료, △ 점검필요

#### 작은 단위

- button [o]
- tag [o]

#### 사용자 컨트롤

- modal [o]
- toast [△]
- dropdown [o]
- switch [△]
- sheet [o]
- counter ui [o]
- pagination [o]

#### 개발자 컨트롤

- snackbar []
  - 보여지는 속도, 사라지는 속도, 닫기 여부, 스택형
- timer progress [△]
- tooltip [o]

#### 사용자 입력/form

- form/input [△]
- form/textara [△]

#### 기타

- slide []
  - 23기준 최신이었던 view transitions api - startViewTransition() 을 이용해서 슬라이드 만들기
- motionlayer []
  - 여러 모션들. framer-motion 처럼 모션 자체를 정의하는 감싸는 용도의 레이어
- uiToolkit []
  - 편집모드, colorpicker 등 qa나 마케팅쪽에서 화면 테스트를 위한 툴.

### 조합으로 완성되는 컴포넌트 (추후)

- 사이드바
- 헤더
- 푸터
- 카드리스트
- 테이블
