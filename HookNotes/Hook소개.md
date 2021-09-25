# Hooks
## Hook 개요
- Hoosk가 생기기전에 state를 함수형 component를 사용할 수 없었다.
- State를 가지고 작업을 하고 싶으면 class component를 만들어야했고, this와 같은 문장 규칙과 Render와 같은 사용하는 방법을 고려해야 했지만 hooks를 사용한다면 이런것들을 신경쓰지않아도 된다.

## Hook 이란?
- Hook는 함수 컴포넌드에서 React state와 생명주기 기능을 연동 할 수 있게 해주는 함수입니다.
- hook은 class안에서는 동작하지 않습니다. 대신 class없이 React를 사용할 수 있게 해주는 것입니다.
  

## Hook 사용 규칙
Hook은 그냥 JavaScript 함수이지만, 두 가지 규칙을 준수해야 합니다.
- 최상위 에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook를 실행하지 마세요
- React 함수 컴포넌트 내에서만 Hook을 호출해야합니다. 일반 자바스크립트 함수에서는 Hook을 호출해서는 안됩니다.

