import React from "react";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/axios";
import { useClient } from "../../utils/zustand";
function UpdatePage() {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { client } = useClient();

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => {
      setTitle(res.data.title);
      setDesc(res.data.desc);
    });
  }, [id]);

  const updateProd = (e) => {
    e.preventDefault();
    let now = new Date();
    api.put(`/posts${id}`),
      {
        title,
        desc,
        date: now,
        author: client?.name,
      }
        .then((res) => toast.success("Updated successfuly"))
        .catch((err) => toast.error("Something went wrong"));
  };
  return (
    <div>
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Update Page
      </h1>
      <form
        className="flex flex-wrap justify-between items-center gap-10"
        onSubmit={(e) => updateProd(e)}
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
        <button className="py-2 px-8 rounded-lg bg-yellow-300">Send</button>
      </form>
    </div>
  );
}

export default UpdatePage;
