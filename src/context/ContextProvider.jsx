import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../components/reducers/reducer.js';
import { log } from '../components/reducers/log.js';

export const Context = createContext({
  state: initialState(),
  reducer
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    log(reducer),
    initialState()
  );
  return (
    <Context.Provider value= { {
      state,
      dispatch
    } }>
      { children }
    </Context.Provider>
  );
};
