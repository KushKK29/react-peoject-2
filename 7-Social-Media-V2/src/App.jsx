import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";
import "./App.css";

function App() {
  const [selectedTab, setselectedTab] = useState("");
  return (
    <>
      <PostListProvider>
        <div className="content">
          <SideBar
            selectedTab={selectedTab}
            setselectedTab={setselectedTab}
          ></SideBar>
          <div className="contain">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
