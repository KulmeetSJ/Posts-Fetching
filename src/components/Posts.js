import React, { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import { Circular } from "styled-loaders-react";

import Post from "./Post";

function Posts() {
  const { posts, loading } = useContext(ApiContext);

  let content = null;

  if (loading) {
    content = (
      <div>
        {" "}
        <Circular color="black" size="40px" />
      </div>
    );
  } else {
    content = (
      <div>
        {posts.map((post) => (
          <Post key={post.id} value={post} />
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Posts;
