import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addMultiplePost:()=>{},
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
  }else if (action.type === "ADD_INTIAL_POST"){
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducerMethod,
    []
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

  const addMultiplePost = (posts)=>{
    dispatchPostList({
      type:"ADD_INTIAL_POST",
      payload:{
        posts
      }
    })
  }

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
        addMultiplePost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
