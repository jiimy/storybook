# 스토리북

npm에 배포하기 위하여 만들어진 스토리북 샘플 레포지토리 입니다. 

배포용이었기 때문에 내부 ui 및 스토리북의 setting은 아직 되어있지 않습니다.

## 스토리북 로컬 실행

npm run storybook

## 새로운 컴포넌트 추가 시

1. stories 폴더 아래로 컴포넌트 폴더 생성
2. 생성된 폴더 안에 컴포넌트명.stories.ts 파일을 만든다.
   2-1.stories 파일에서 title은 경로를 의미한다.
   2-2.layout은 컴포넌트가 보여질 형식을 의미한다.
   2-3. export 로 변수타입을 내보낸다.
3. src/index.ts 에서 추가된 컴포넌트의 위치를 export 한다.


## npm 배포

version 수정 후
npm publish

## url 배포

https://www.chromatic.com/builds?appId=64e5aa9d2c6b31e96ff80703

https://www.chromatic.com/

https://www.chromatic.com/library?appId=64e5aa9d2c6b31e96ff80703


## 실제 사용

ex)
import { Button } from "cherry-cock-ui";

## ui
- button []
  - 테마, 사이즈, full 사이즈 여부
- sheet []
  - 열고/닫고, 트랜지션, 내부에 모션이 없는 다른 컴포넌트 가능.
- toast []
  - 방향, 위치, 속도
- snackbar []
  - 보여지는 속도, 사라지는 속도, 닫기 여부, 스택형
- motionlayer []
  - 여러 모션들 
- timer progress []
  - 칸 갯수, 총 시간, 시작타이밍 
- counter ui []
  - 버튼 위치
