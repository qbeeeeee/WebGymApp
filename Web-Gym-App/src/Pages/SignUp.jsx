import React, { useState } from "react";
import loginImage from "./../assets/img/loginPage.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInSuccess,
  signInStart,
} from "../redux/user/userSlice";
import Spinner from "../Components/Spinner";

const SignUp = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    if (haveAccount) {
      e.preventDefault();
      if (!formData.password || !formData.email) {
        return dispatch(signInFailure("Please fill all the fields"));
      }
      try {
        dispatch(signInStart());
        const res = await fetch("/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success === false) {
          dispatch(signInFailure(data.message));
        }
        if (res.ok) {
          dispatch(signInSuccess(data));
          navigate("/");
        }
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    } else {
      e.preventDefault();
      if (!formData.username || !formData.password || !formData.email) {
        return dispatch(signInFailure("Please fill all the fields"));
      }
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success === false) {
          dispatch(signInFailure(data.message));
        }
        if (res.ok) {
          setFormData({ ...formData, password: "" });
          setHaveAccount(true);
        }
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex justify-around items-center bg-neutral-900"
    >
      <div
        style={{
          boxShadow: "-8px 8px 10px 0px red, -4px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
        className={`flex flex-col justify-center items-center text-white w-[500px] ${
          haveAccount ? "h-[375px]" : "h-[450px]"
        }  bg-neutral-800 bg-opacity-65 p-6 rounded-sm`}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-[90%] relative "
        >
          <div className="mt-2 w-full">
            <div className="">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full mt-2 px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your Email"
                value={formData.email}
                id="email"
                onChange={handleChange}
              />
            </div>
            <div
              style={{ display: haveAccount ? "none" : "" }}
              className="mt-5"
            >
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your username"
                value={formData.username}
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full mt-2 px-3 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
                value={formData.password}
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between w-[100%] text-sm mx-4 mt-5">
            <div
              onClick={() => setHaveAccount(!haveAccount)}
              className="cursor-pointer hover:underline"
            >
              {haveAccount ? "Create an account" : " Already Have an account"}
            </div>
            <div className="cursor-pointer hover:underline">
              Forgot Password?
            </div>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="flex justify-center items-center mt-7 bg-red-500
            w-32 h-10 font-bold text-lg shadow-lg cursor-pointer hover:bg-red-600 rounded-md"
            style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}
          >
            {haveAccount ? (
              loading ? (
                <>
                  <Spinner />
                </>
              ) : (
                "Log in"
              )
            ) : (
              "Sign Up"
            )}
          </button>
          {errorMessage && (
            <div
              className="mt-5 text-red-500 bg-red-200  p-4 absolute -bottom-28 rounded-md "
              color="failure"
            >
              {errorMessage}
            </div>
          )}
        </form>
      </div>

      <div className="text-white opacity-0">image</div>
    </div>
  );
};

export default SignUp;
