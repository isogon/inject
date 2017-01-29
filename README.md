@isogon/inject
==============

@isogon/inject is a simple way to allow you to dispatch a function that gets injected later.

```js
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import inject from '@isogon/inject';

import reducer from './reducers'; // Your reducers
import someHelper from './someHelper'; // Something you need in your actions

const initialState = {};
const middleware = applyMiddleware(inject({
  someHelper,
});
const store = compose(middleware)(createStore)(reducer, initialState);

store.dispatch(({ someHelper }) => someHelper('DO_THE_THING'));
```
