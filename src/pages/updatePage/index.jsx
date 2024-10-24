import React from "react";
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom'
import { api } from "../../utils/axios";
function UpdatePage() {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
const {client}=useClient()
  useEffect(() => {
    api.get(`/posts/${id}`)
      .then((res) => {
        setTitle(res.title);
        setDesc(res.desc);
    
      });
  }, [id]);

  const updateProd = (e) => {
    e.preventDefault();
    let now = new Date()
    api.put(`/posts${id}`), {
      title,
      desc,
      date:now,
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
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="number"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button className="py-2 px-8 rounded-lg bg-yellow-300">Send</button>
      </form>
    </div>
  );
}

export default UpdatePage;