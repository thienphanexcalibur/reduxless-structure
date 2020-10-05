import React, { useContext, useEffect } from "react";
import {connect} from '../context';
import Post from "./Post";
function PostContainer(props) {
  const { type, posts, user } = props;
  useEffect(() => {
  }, []);
  return <div></div>;
}

export default connect(
  (state) => ({user: state.user})
)(PostContainer);




