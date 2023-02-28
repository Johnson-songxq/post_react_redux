import "./App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="app">
      <h1>Online Posts</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
