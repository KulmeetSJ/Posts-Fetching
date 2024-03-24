import React from "react";

const SubscribeCard = () => {
  return (
    <div className=" flex flex-col justify-between gap-2 bg-gray-800 px-4 py-2  rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold  ">Subscribe to premium</h2>
      <p className="text-sm font-light">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button className="w-1/2 bg-blue-500 px-4 py-2 text-base font-semibold text-center gap-4 rounded-full mt-4 hover:bg-blue-600 hover:font-bold">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeCard;
