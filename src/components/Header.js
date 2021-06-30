import React from "react";

export const Header = (props) => {
  return (
    <header className="bg-white shadow md:flex md:p-0 justify-between">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">{ props.title }</h1>
      </div>
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      {props.children}
      </div>
      
    </header>
  );
};
