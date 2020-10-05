import React, { useContext, createContext } from "react";
import { Provider } from "./context";
import PostContainer from "./components/PostContainer";
import "./styles.css";

export default function App() {
  return (
    <Provider>
      <PostContainer></PostContainer>
    </Provider>
  );
}
