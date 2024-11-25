import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});



const postListReducerMethod = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "Delete Post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if(action.type ==="ADD_POST"){
    newPostList = [action.payload,...currentPostList]
    
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducerMethod,
    DEFAULT_POST_LIST
  );

  const addPost = (userid,posttitle,postbody,postreaction,posttag) => {
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reaction: postreaction,
        tags: posttag,
        userid: userid,
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "Delete Post",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "my name is dhiraj",
    body: "I am becoming the the good developer ",
    reaction: 1,
    tags: ["developer", "full-stack", "Leader"],
    userid: "user-9",
  },
  {
    id: 2,
    title: "my name is Nikhil",
    body: "I am becoming the the good developer ",
    reaction: 2,
    tags: ["Web-developer", "full-stack"],
    userid: "user-91",
  },
];

export default PostListProvider;
