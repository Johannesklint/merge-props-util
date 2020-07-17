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
  const merged = mergeProps(props, {
    onClick: (event) => console.log("clicked", event),
    onFocus: (event) => console.log("onFocus", event);
    className: "some-className",
  })
  return <button {...merged}>Click me!</button>
}
```

```jsx
```
