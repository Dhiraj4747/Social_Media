import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

function CreatePost() {

  const {addPost}=useContext(PostList)

  const userIdelement = useRef()
  const tittleelement = useRef()
  const bodyelement = useRef()
  const tagelement = useRef()
  const reactionelement = useRef()


  const handleOnSunmit = (event)=>{
    event.preventDefault()
    const userid = userIdelement.current.value;
    const posttitle = tittleelement.current.value;
    const postbody = bodyelement.current.value;
    const postreaction = reactionelement.current.value;
    const posttag = tagelement.current.value.split(" ")

    userIdelement.current.value=""
    tittleelement.current.value=""
    bodyelement.current.value=""
    reactionelement.current.value=""
    tagelement.current.value=""
    
    addPost(userid,posttitle,postbody,postreaction,posttag)
  }


  return (
    <>
      <form className="create-post" onSubmit={handleOnSunmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User-Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdelement}
            placeholder="your user Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={tittleelement}
            placeholder="how are you felling today...!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post content
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="body"
            ref={bodyelement}
            placeholder="Tell Description about the Post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Post reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionelement}
           
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hashtag here 
          </label>
          <input
            type="text"
            className="form-control"
            id="hashtag"
            ref={tagelement}
            placeholder="Enter your hashtags using space "
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}
export default CreatePost;
