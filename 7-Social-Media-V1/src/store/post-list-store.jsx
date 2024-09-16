//sabse phele create context kiya
import { createContext, useReducer } from "react";
// phir context ke andar DEFAULT empty value paas kardi
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
//ye jo upar likha hai vo hota hia hamara contract design ya
// context api basic design
// ye iss basis pe nahi ki dena kya hai mujha isme balki
//iss basis pe ki uss data ko jo consume karega toh uske liye
// kya structure perfect rahega vo dete hai hum yaha

const postListReducer = (currpostList, action) => {
  let newpostLst = currpostList;
  if (action.type === "DELETE_POST") {
    newpostLst = newpostLst.filter((post) => post.id !== action.payload.postId);
  }
  if (action.type === "ADD_POST") {
    newpostLst = [action.payload, ...newpostLst];
  }
  return newpostLst;
};
const PostListProvider = ({ children }) => {
  //useReducer ke andar kya dena padta hai ek reduucer
  // aur ek default values
  //reducer hai state ka baap
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userid, posttitle, postbody, tags, reactions) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: userid,
        title: posttitle,
        body: postbody,
        reaction: reactions,
        userid: userid,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostListContext.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi prince, i am going to mumbai",
    reaction: 2,
    userid: "user-9",
    tags: ["vacation", "Mumbai", "Enjying"],
  },
  {
    id: "2",
    title: "Going to New York",
    body: "Hi prince, i am going to New York",
    reaction: 200,
    userid: "user-12",
    tags: ["vacation", "New York", "Enjying"],
  },
];

export default PostListProvider;
