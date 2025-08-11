import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");

  return (
    <PostListProvider>
    <div className="app-container">
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
      <div className="content">
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
  );
}

export default App;
