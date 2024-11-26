import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addMultiplePost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addMultiplePost(data.posts);
        setFetching(false);
      });
      return ()=>{
        console.log("component exit")
        controller.abort();
      }
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}
export default PostList;
