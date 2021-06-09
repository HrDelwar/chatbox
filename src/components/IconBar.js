import React from "react";

const IconBar = ({className}) => {
  return (
    <section class={"iconbar  bg-gray-icon text-white w-16 h-screen " + className}>
      <ul class="m-0 p-0 flex justify-around items-center flex-col">
        <li class="mb-2 pt-3 flex justify-center items-center">
          <a href="/#" class="flex justify-center items-center">
            <i class="fab fa-discord text-base rounded-full hover:rounded-lg  bg-gray-hero text-white p-3   transition duration-500 ease-linear "></i>
          </a>
        </li>

        <li class="border-t-2 border-gray-600 w-8 mb-3">
          <span></span>
        </li>

        <li class=" flex justify-center items-center ">
          <a href="/#" class="flex justify-center items-center">
            <i class="fab fa-laravel text-base rounded-full hover:rounded-lg bg-gray-hero text-white p-3  transition duration-500 ease-linear "></i>
          </a>
        </li>

        <li class=" flex justify-center items-center">
          <a href="/#" class="h-20 w-20 flex justify-center items-center">
            <img
              src="https://hrdelwar.netlify.app/static/media/hr.delwarpng.f5691cd6.png"
              className="h-10 w-10 rounded-full hover:rounded-lg transition duration-500 ease-linear "
              alt="Profile"
            />
          </a>
        </li>

        <li class="mb-3  flex justify-center items-center">
          <a href="/#" class="flex justify-center items-center">
            <i class="fas fa-plus text-base rounded-full hover:rounded-lg bg-gray-700 hover:bg-green-500 text-green-500 hover:text-white p-3 transition duration-500 ease-linear  "></i>
          </a>
        </li>

        <li class=" border-gray-600 flex justify-center items-center ">
          <a href="/#" class="flex items-center justify-center">
            <i class="fas fa-compass  text-base  p-3  bg-gray-700 hover:bg-green-500 text-green-500 hover:text-white rounded-full hover:rounded-lg transition duration-500 ease-linear "></i>
          </a>
        </li>
        <li class="w-8 rounded mb-3 mt-3 border-b-2 border-gray-600">
          <span></span>
        </li>
        <li class="mb-3  flex justify-center items-center">
          <a href="/#" class="flex items-center justify-center">
            <i class="fas  text-base fa-download p-3  bg-gray-700 hover:text-white hover:rounded-lg text-green-500 hover:bg-green-500 rounded-full transition duration-500 ease-linear  "></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default IconBar;
