import React, { useEffect } from "react";
import { useState } from "react";
import { api } from "../../utils/axios";
import { toast } from "react-toastify";

function RegisterPage() {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
 

  const sendData = (e) => {
    e.preventDefault();
    console.log(name, username, password );
    api.post("/users", { name, username, password })
    .then((res) => {
      toast.success("Created successfuly");
      setName("");
      setUsername("");
      setPassword("");
     
    })
    .catch((err) => toast.error("Something went wrong"));
     
  };
  return (
    <div className="m-6">
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Register Page
      </h1>
      <form
        className="flex flex-col justify-between items-center gap-10"
        onSubmit={(e) => sendData(e)}
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
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="py-2 px-8 rounded-lg bg-yellow-300"
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="py-2 px-8 rounded-lg bg-yellow-300">Send</button>
      </form>
    </div>
  );
}

export default RegisterPage;
