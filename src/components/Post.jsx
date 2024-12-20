import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";

function Post({ post }) {
  const {deletePost} = useContext(PostList)

  return (
    <>
      <div className="card post-card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick = {() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
          ))}
          <div className="alert alert-info reaction" role="alert">
            This post is rected by {post.reaction} people !
          </div>
        </div>
      </div>
    </>
  );
}
export default Post;
