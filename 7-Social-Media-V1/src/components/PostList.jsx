import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import { useContext } from "react";
const PostList = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
