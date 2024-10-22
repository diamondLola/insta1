import React, { useEffect } from "react";
import { useState } from "react";
import { api } from "../../utils/axios";
import { toast } from "react-toastify";


function LoginPage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [data, setData] = useState("");

  useEffect(() => {
    api.get("/users").then((res) => setData(res.data));
  }, []);
  console.log(data);

  const checkData = (e) => {
    e.preventDefault();
    const userFound = data.find(
        (user) => user.username === username && user.password === password
      );
      if (userFound) {
        toast.success("Found successfully");
      } else {
        toast.error("Check your data");
      }
    };
 
  return (
    <div className="m-6">
      <h1 className="flex justify-center items-center p-4 font-semibold">
        Login Page
      </h1>
      <form
        className="flex flex-col justify-between items-center gap-10"
        onSubmit={(e) => checkData(e)}
      >
      
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
        
        <button className="py-2 px-8 rounded-lg bg-yellow-300">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
