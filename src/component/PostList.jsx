import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPosts, fetchTags } from "../api/api";

function PostList() {
  const { data: postData, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    console.log(title, tags, "llllllllll");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* {isPostError && <h5 onClick={() => reset()}>Unable to Post</h5>} */}
        <input
          type="text"
          placeholder="Enter your post.."
          className="postbox"
          name="title"
        />
        <div className="tags">
          {tagsData?.map((tag) => {
            return (
              <div key={tag}>
                <input name={tag} id={tag} type="checkbox" />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>
        <button> submit </button>
        {/* <button disabled={isPending}> */}
        {/* {isPending ? "Posting..." : "Post"} */}
        {/* </button> */}
      </form>
      <div className=" w-full h-full bg-zinc-600 flex items-center flex-col gap-4">
        {postData?.map((a) => {
          return (
            <div className=" w-[90%] h-[7vh] bg-zinc-500 rounded-lg flex p-2  justify-between items-center  ">
              <p className="font-bold text-xl mr-4">{a.title}</p>
              <div className="flex gap-4">
                {a.tags.map((sub) => (
                  <span className="text-white px-2  py-1 rounded-md bg-zinc-900">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PostList;
