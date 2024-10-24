import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../utils/axios";
import { useClient } from "../../utils/zustand";
function CreatePage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {client, setClient} = useClient()
  const sendData = (e) => {
    console.log(title, desc, date, author);
    e.preventDefault();
    let now = new Date()
    api.post(`/posts`, {
        title,
        desc,
        date: now,
        author: client?.name,
      })
      .then((res) => {
        toast.success("Created successfuly");
        setTitle("");
        setDesc("");
       
      })
      .catch((err) => toast.error("Something went wrong"));
  };
  return (
    <div className="m-6">
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Create News Page
      </h1>
      <form
        className="flex flex-col justify-between items-center gap-10"
        onSubmit={(e) => sendData(e)}
      >
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

       
        <button className="py-2 px-8 rounded-lg bg-yellow-300">
          Create a post
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
