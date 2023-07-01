import React from "react";
import { SavedShows } from "../components/SavedShows";

export const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/6521cbe6-8f8e-423f-92ef-e5d189c2a2ea/NP-en-20230626-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          className="  w-full h-[400px] object-cover"
          alt="/"
        />{" "}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
      </div>
      <SavedShows />
    </>
  );
};
