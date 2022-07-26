import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="object-contain cursor-pointer w-44"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="logo"
          />
        </Link>
        <div className="items-center hidden space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="px-4 py-1 text-white bg-green-600 rounded-full cursor-pointer">
            Follow
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="px-4 py-1 border border-green-600 rounded-full cursor-pointer">
          Get Started
        </h3>
      </div>
    </header>
  );
};

export default header;
