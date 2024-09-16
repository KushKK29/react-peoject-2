import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const useridelement = useRef();
  const posttitleelement = useRef();
  const postbodyelement = useRef();
  const tagselement = useRef();
  const reactionselement = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();
    const userid = useridelement.current.value;
    const posttitle = posttitleelement.current.value;
    const postbody = postbodyelement.current.value;
    const tags = tagselement.current.value.split(" ");
    const reactions = reactionselement.current.value;

    useridelement.current.value = "";
    posttitleelement.current.value = "";
    postbodyelement.current.value = "";
    tagselement.current.value = "";
    reactionselement.current.value = "";
    addPost(userid, posttitle, postbody, tags, reactions);
  };

  return (
    <form className="create-post" onSubmit={handelSubmit}>
      <div className="mb-3">
        <label htmlFor="Post Title" className="form-label">
          Post Title :
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Title Here"
          id="title"
          ref={posttitleelement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Description :
        </label>
        <textarea
          rows="4"
          type="text"
          placeholder="Write Description Here"
          className="form-control"
          id="body"
          ref={postbodyelement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter ID :
        </label>
        <input
          type="text"
          placeholder="Enter ID"
          className="form-control"
          id="body"
          ref={useridelement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags :
        </label>
        <textarea
          rows="2"
          type="text"
          placeholder="Tags Must Be Seperated By Space"
          className="form-control"
          id="body"
          ref={tagselement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          Enter No. of Reactions:
        </label>
        <input
          type="text"
          placeholder="Enter No. of reactions"
          className="form-control"
          id="body"
          ref={reactionselement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};
export default CreatePost;
