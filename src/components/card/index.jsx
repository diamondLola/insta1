import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../utils/axios";

function MyCard() {
  let [data, setData] = useState([]);

  const delProduct = (id) => {
    api.delete(`/posts/${id}`)
      .then((res) => {
        toast.success("Deleted successfully");
       
      })
      .catch((err) => toast.error("Something went wrong"));
  };

  useEffect(() => {
    api.get("/posts")
      .then((res) => setData(res.data))
      .catch((err) => toast.error("Failed to fetch data"));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {data.map((info) => (
        <div
          className="flex flex-col justify-between items-start rounded-lg border-solid bg-blue-200/50 hover:bg-blue-200/100 gap-4 h-80 w-full p-4"
          key={info._id}
        >
          <h2 className="font-semibold">{info?.title}</h2>
          <p>{info?.desc}</p>
          <p>{info?.date}</p>
          <p>{info?.author}</p>
          <span className="flex justify-between items-center gap-10">
            <Link className="font-bold text-green-500" to={`/${info._id}`}>
              View more
            </Link>
            
            <button
              className="px-10 py-2 bg-green-500 rounded-lg"
              onClick={() => delProduct(info._id)}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default MyCard;