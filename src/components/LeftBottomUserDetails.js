import React from "react";

const LeftBottomUserDetails = () => {
  return (
    <div class=" flex justify-between items-center p-2">
      <div class="flex">
        <img
          src="https://hrdelwar.netlify.app/static/media/hr.delwarpng.f5691cd6.png"
          alt="user"
          class="w-8 h-8 rounded-full"
        />
        <span class="flex flex-col px-1">
          <span class="capitalize text-xs">delwar</span>
          <span class="text-gray-400 text-xs">#4382</span>
        </span>
      </div>
      <div class="">
        <ul class="flex  items-center">
          <li>
            <i class="fas fa-microphone-slash p-2 hover:bg-gray-hover text-gray-300"></i>
          </li>
          <li>
            <i class="fas fa-headphones p-2 hover:bg-gray-hover text-gray-300"></i>
          </li>
          <li>
            <i class="fas fa-cog p-2 hover:bg-gray-hover text-gray-300"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBottomUserDetails;
