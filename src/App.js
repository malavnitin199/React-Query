import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { fetchPosts } from "./api/api";
import PostList from "./component/PostList";

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div className="w-screen h-screen] overflow-x-hidden">
      <p> MY post Data </p>
      <PostList />
      {console.log(data, isLoading, "check")}
    </div>
  );
}

export default App;
