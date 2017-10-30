## Writing tests

Here's what an example unit test for the first draft of our counter container might look like. Note that we're not making any assertions about the view, just the updates and the state of the container.

```javascript
import { isolate } from 'architecture/app';
import CounterContainer, { Increment, Decrement } from './';

describe('CounterContainer', () => {
  const container = isolate(CounterContainer);

  beforeEach(() => container.push({ count: 0 }))

  describe('state changes', () => {

    it('should increment', () => {
      container.dispatch(new Increment());
      expect(container.state()).to.deep.equal({ count: 1 });
    })

    it('should decrement', () => {
      container.dispatch(new Decrement());
      expect(container.state()).to.deep.equal({ count: -1 });
    })
  })
})
```

## Testing commands

**@TODO**

```javascript
describe('CounterContainer', () => {
  // ...

  describe('local storage handling', () => {

    it('should save counter', () => {
      container.push({ count: 1138 });
      const cmds = container.dispatch(new SaveCounter());

      expect(cmds).to.deep.equal([
        new LocalStorage.Write({ key: "counter", value: 1138 })
      ]);
    })
  })
})
```
