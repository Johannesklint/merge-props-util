### Installation

```jsx
npm i merge-props-utils
```

### Usage

```jsx
import mergeProps from 'merge-props-util'

function App() {
  const props = {
    one: "one",
    two: "two"
  }
  const merged = mergeProps(
    props,
    {
      onClick: event => {…},
      onFocus: event => {…},
      className: "some-className"
    },
    { "data-testid": "some-testid" }
  )
  
  return <button {...merged}>Click me!</button>
}
```
