import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/axios";

function SinglePage() {
  let { id } = useParams();
  let [single, setSingle] = useState();

  let dateFormat = new Date(info.date);

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setSingle(res));
  }, [id]);
  return (
    <div>
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Single Page
      </h1>
      <div className="flex flex-col justify-center items-center gap-2 m-8">
        <h1 className="font-bold">news {single?._id}</h1>
        <h2>{single?.title}</h2>
        <p>{single?.desc} </p>
        <p>
          {dateFormat.getHours} : {dateFormat.getMinutes}
        </p>
        <p>
          {dateFormat.getDay} / {dateFormat.getMonth() + 1} /
          {dateFormat.getFullYear}
        </p>
        <p>{single?.author}</p>
      </div>
    </div>
  );
}

export default SinglePage;
