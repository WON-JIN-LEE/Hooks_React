# Effect Hook

## Using the Effect Hook
- Effect Hook을 사용하면 함수 컴포넌트에서 side effect를 수행할 수 있습니다.
- React의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 좋습니다.

React 컴포넌트에는 일반적으로 두 종류의 side effects가 있습니다.

## 정리(Clean-up)를 이용하지 않는 Effects
- React가 DOM을 업데이트한 뒤 추가로 코드를 실행해야 하는 경우가 있습니다. 네트워크 리퀘스트, DOM 수동 조작, 로깅 등은 정리(clean-up)가 필요 없는 경우들입니다.
#### useEffect가 하는 일은 무엇일까요? 
- useEffect Hook을 이용하여 우리는 React에게 컴포넌트가 렌더링 이후에 어떤 일을 수행해야하는 지를 말합니다. React는 우리가 넘긴 함수를 기억했다가(이 함수를 ‘effect’라고 부릅니다) DOM 업데이트를 수행한 이후에 불러낼 것입니다. 
 
#### useEffect를 컴포넌트 안에서 불러내는 이유는 무엇일까요? 
- useEffect를 컴포넌트 내부에 둠으로써 effect를 통해 count state 변수(또는 그 어떤 prop에도)에 접근할 수 있게 됩니다. 
 
#### useEffect는 렌더링 이후에 매번 수행되는 걸까요? 
-  기본적으로 첫번째 렌더링과 이후의 모든 업데이트에서 수행됩니다.
-  React는 effect가 수행되는 시점에 이미 DOM이 업데이트되었음을 보장합니다.

#### 팁
- componentDidMount 혹은 componentDidUpdate와는 달리 useEffect에서 사용되는 effect는 브라우저가 화면을 업데이트하는 것을 차단하지 않습니다. 
- 이를 통해 애플리케이션의 반응성을 향상해줍니다. 대부분의 effect는 동기적으로 실행될 필요가 없습니다.
  
## 정리(clean-up)를 이용하는 Effects
- 외부 데이터에 구독(subscription)을 설정해야 하는 경우를 생각해보겠습니다. 이런 경우에 메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요합니다.
-  effect가 함수를 반환하면 React는 그 함수를 정리가 필요한 때에 실행시킬 것입니다.

#### effect에서 함수를 반환하는 이유는 무엇일까요? 
- 이는 effect를 위한 추가적인 정리(clean-up) 메커니즘입니다. 모든 effect는 정리를 위한 함수를 반환할 수 있습니다. 
- 구독(subscription)의 추가와 제거가 모두 하나의 effect를 구성하는 것입니다.

#### React가 effect를 정리(clean-up)하는 시점은 정확히 언제일까요? 
- React는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행합니다.  

#### 주의 
- effect에서 반드시 유명함수(named function)를 반환해야 하는 것은 아닙니다.
- 목적을 분명히 하기 위해 정리(clean-up)라고 부르고 있지만 화살표 함수를 반환하거나 다른 이름으로 불러도 무방합니다.

## 요약
- useEffect가 컴포넌트의 렌더링 이후에 다양한 side effects를 표현할 수 있음을 위에서 배웠습니다. 
-  effect에 정리(clean-up)가 필요한 경우에는 함수를 반환합니다. 정리(clean-up)가 필요없는 경우에는 어떤 것도 반환하지 않습니다. 
- 이처럼 effect Hook은 두 가지 경우를 한 개의 API로 통합합니다.