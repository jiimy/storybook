# 스토리북

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
