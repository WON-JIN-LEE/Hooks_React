# State Hook
## Using the State Hook
- useState는 state를 함수 컴포넌트 안에서 사용할 수 있게 해줍니다.
- 함수 컴포넌트를 사용하던 중 state를 추가하고 싶을 때 usestate를 사용합니다.

useState를 호출하는 것은 무엇을 하는 걸까요?
- "state 변수"를 선언할 수 있습니다. 변수의 이름은 아무 이름으로 지어도 됩니다. useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 똑같습니다. 
- 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다.

useState의 인자로 무엇을 넘겨주어야 할까요?
- useState()Hook의 인자로 넘겨주는 값은 state의 초기 값입니다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있습니다. 
 
useState는 무엇을 반환할까요? 
- state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다. 
- 이것이 바로 const [count, setCount] = useState()라고 쓰는 이유입니다.
-  React는 해당 변수를 리렌더링할 때 기억하고, 가장 최근에 갱신된 값을 제공합니다. count 변수의 값을 갱신하려면 setCount를 호출하면 됩니다.

### state 가져오기
클래스 컴포넌트는 count를 보여주기 위해 this.state.count를 사용합니다.
```js
  <p>You clicked {this.state.count} times</p>
```
반면 함수 컴포넌트는 count를 직접 사용할 수 있습니다.
```js
  <p>You clicked {count} times</p>
```

### state 갱신하기
클래스 컴포넌트는 count를 갱신하기 위해 this.setState()를 호출합니다.
```js
  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>
  ```
반면 함수 컴포넌트는 setCount와 count 변수를 가지고 있으므로 this를 호출하지 않아도 됩니다.
```js
  <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
```

### 팁: 여러 개의 state 변수를 사용하기
- [something, setSomething]의 쌍처럼 state 변수를 선언하는 것은 유용합니다. 왜냐하면 여러 개의 변수를 선언할 때 각각 다른 이름을 줄 수 있기 때문입니다.
- 여러 개의 state 변수를 사용하지 않아도 됩니다. state 변수는 객체와 배열을 잘 가지고 있을 수 있으므로 서로 연관있는 데이터를 묶을 수 있습니다. 하지만 클래스 컴포넌트의 this.setState와 달리 state를 갱신하는 것은 병합하는 것이 아니라 대체하는 것입니다.
- 함께변경 되는 값에 따라 state를 여러 state 변수로 분할하는 것을 추천합니다. 모든 state가 단일 객체에 있으면 추출하기가 더 어려울 것입니다.