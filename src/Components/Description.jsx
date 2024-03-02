import React from "react";

function DescriptionCard({ title, description }) {
  return (
    <div>
      <div className="bg-zinc-950 rounded-lg py-6 md:px-6 px-4">
        <h1 className="text-2xl text-center text-blue-300  underline mb-2 md:text-3xl lg:text-4xl ">
{title}
        </h1>
        <p className="text-center text-lg md:text-xl">
    {description}
        </p>
      </div>
    </div>
  );
}

export default DescriptionCard;
