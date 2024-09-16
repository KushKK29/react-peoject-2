import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card post-card" style={{ minwidth: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hastag">
            {tags}
          </span>
        ))}
      </div>
      <div className="alert alert-info reaction" role="alert">
        Hey this post just got :{" "}
        {post.reactions
          ? post.reactions.likes + post.reactions.dislikes
          : post.reaction}{" "}
        reactions
      </div>
    </div>
  );
};
export default Post;
