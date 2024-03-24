import React from "react";

function Post({ value }) {
  return (
    <div className="border border-gray-300 p-8 my-6 mx-10 rounded-xl flex flex-col justify-between gap-10 hover:cursor-pointer hover:text-blue-400">
      <h1 className="text-3xl font-bold">
        {value.id} : {value.title}
      </h1>
      <p className="font-medium text-lg">{value.body}</p>
    </div>
  );
}

export default Post;
