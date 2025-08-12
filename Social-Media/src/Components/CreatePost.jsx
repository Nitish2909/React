
import { PostList } from "../store/post-list-store";
import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";

function CreatePost() {
  // const { addPost } = useContext(PostList);

  return (
    <Form  method="POST" className="create-post" >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Your user Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="How are you feeling today....."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows="4"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Tell us More about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of reaction
        </label>
        <input
          type="text"
          name="reaction"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtag" className="form-label">
          Enter Your hashtag here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
}

export async function createPostAction(data){
     const formData= await data.request.formData();
     const postData = Object.fromEntries(formData);
     postData.tags = postData.tags.split(" ");
     console.log(postData);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData)
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post);
      });
      return redirect("/");
  };
export default CreatePost;
