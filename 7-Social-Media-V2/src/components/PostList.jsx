import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import { useContext } from "react";
import WelcomeMess from "./WelcomeMess";
const PostList = () => {
  const { postList, addinitialPosts } = useContext(PostListContext);
  console.log(postList);
  const handelClick = () => {
    console.log("Nutt");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && <WelcomeMess onGetPostClick={handelClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
