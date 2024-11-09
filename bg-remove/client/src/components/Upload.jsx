import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl md-text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-pink-500 bg-clip-text text-transparent py-6 md:py-16">
        See the magic. Try now
      </h1>
      <div className="text-center mb-24">
          <input type="file" name="" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-pink-500  m-auto hover:scale-100 transition-all duration-700"
          >
            <img width={20} src={assets.upload_btn_icon} alt="" />
            <p className=" text-white text-sm">Upload your images</p>
          </label>
        </div>
    </div>
  );
};

export default Upload;
