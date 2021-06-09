import React from "react";

const TopHeader = ({ setToggleRightSidebar, toggleRightSidebar, toggleLeftSidebar, setToggleLeftSidebar }) => {
  return (
    <header class="p-2 px-4 leading-3 shadow-bottom text-xs flex justify-between items-center">
      <div class="">
        <span 
         onClick={() => setToggleLeftSidebar(!toggleLeftSidebar)}
        class="px-3 cursor-pointer lg:hidden">
          <i class="far fa-bars"></i>
        </span>
        <span class="pl-1">
          <i class="far fa-hashtag text-gray-400"></i>
        </span>
        <span class="px-3 border-r border-gray-600 cursor-default">about</span>
        <span class="px-2 capitalize text-gray-400 cursor-pointer hidden lg:block">
          About our server
        </span>
      </div>
      <div class="flex justify-between items-center leading-4 text-gray-400">
        <span class="px-3 cursor-pointer md:block hidden">
          <i class="fas fa-bell"></i>
        </span>
        <span class="px-3 cursor-pointer md:block hidden transform rotate-45">
          <i class="fas fa-thumbtack"></i>
        </span>
        <span class="px-3 cursor-pointer relative">
          <input
            type="text"
            name="text"
            class="w-32 rounded text-xs leading-4 pl-1 bg-gray-icon focus:w-56 "
            placeholder="Search"
          />
          <span class="-ml-5">
            <i class="fas fa-search  leading-3 "></i>
          </span>
        </span>
        <span class="px-3 cursor-pointer  md:block hidden ">
          <i class="fas fa-comment-alt"></i>
        </span>
        <span class="px-3 cursor-pointer  md:block hidden">
          <i class="fas fa-question-circle"></i>
        </span>
        <span
          onClick={() => setToggleRightSidebar(!toggleRightSidebar)}
          class="px-3 cursor-pointer lg:hidden"
        >
          <i class="fas fa-user-friends"></i>
        </span>
      </div>
    </header>
  );
};

export default TopHeader;
