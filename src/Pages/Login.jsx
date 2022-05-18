import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold mt-3">My Todo App</h1>
      </div>
      <h2 className="text-3xl pt-6 font-bold">Login</h2>
      <div className="bg-slate-200 flex flex-col items-center justify-center py-8 w-full lg:w-1/2 mx-auto mt-16 rounded-lg">
        <input
          className="block my-5 h-10 w-3/4 rounded-md pl-5"
          type="email"
          placeholder="Enter your Email"
          required
        />
        <input
          className="block my-5 h-10 w-3/4 rounded-md pl-5"
          type="password"
          placeholder="Enter your Password"
          required
        />
        <input className="btn" type="submit" value="Login" />
        <p>
          New to MyToDoApp?{" "}
          <span
            onClick={() => navigate("/registration")}
            className="text-primary cursor-pointer"
          >
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
