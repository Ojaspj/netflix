import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";

export const Signup = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const { user, signUp } = UserAuth();

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/6521cbe6-8f8e-423f-92ef-e5d189c2a2ea/NP-en-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="hidden sm:block absolute w-full h-full obejct-cover"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="w-full fixed px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                action=""
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-600 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                onChange={(e) => setPassword(e.target.value)}

                  className="p-3 my-2 bg-gray-600 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 rounded font-bold my-6">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>
                  <Link to={"/login"} className="cursor-pointer ml-2">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
