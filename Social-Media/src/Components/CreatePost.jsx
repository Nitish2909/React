import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store"

function CreatePost() {

  const {addPost}=useContext(PostList);

  const userIdElement=useRef();
    const TitleElement=useRef();
  const BodyElement=useRef();
  const ReactionElement=useRef();
  const HashtagElement=useRef();

    const handleSubmit =(event) =>{
    event.preventDefault();
    const userId= userIdElement.current.value;
    const postTitle=TitleElement.current.value;
    const postBody=BodyElement.current.value;
    const reactions = ReactionElement.current.value;
    const  tags=HashtagElement.current.value.split(" ");

    addPost(userId,postTitle,postBody,reactions,tags) 

       userIdElement.current.value= "";
    TitleElement.current.value="";
    BodyElement.current.value="";
     ReactionElement.current.value="";
    HashtagElement.current.value="";

  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        placeholder="Your user Id"/>
        </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={TitleElement}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        placeholder="How are you feeling today....."/>
        </div>
          <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={BodyElement}
          rows="4"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        placeholder="Tell us More about it"/>
        </div>
        <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of reaction
        </label>
        <input
          type="text"
          ref={ReactionElement}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        placeholder="How many people reacted to this post"/>
        </div>
              <div className="mb-3">
        <label htmlFor="hashtag" className="form-label">
          Enter Your hashtag here
        </label>
        <input
          type="text"
          ref={HashtagElement}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        placeholder="Please enter tags using space"/>
        </div>
         
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
export default CreatePost;
