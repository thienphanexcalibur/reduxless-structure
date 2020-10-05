import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext({
  posts: []
});

const initialState = {
  posts: [],
  user: {
    id: 123123,
    username: "foo",
    role: "user"
  }
};

export function _connect(mapStateToProps = {}, mapActionsToProps = {}, context = AppContext) {
  return function (WrappedComponent) {
    return function Connect (props = {}) {
      const state = useContext(context);
      const propsState = mapStateToProps(state);
      return (<WrappedComponent {...props} {...propsState} />);
    }
  }
}

export const connect = _connect;

export const Provider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
