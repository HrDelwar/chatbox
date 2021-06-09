import React from "react";

const bodyChatData = [...Array(50).keys()];

const ContentBody = () => {
  return (
    <div class="bg-gray-content">
      <div class="pl-4 pt-5">
        <div class="p-3 px-4 rounded-full bg-gray-600 text-4xl inline-block">
          <i class="far fa-hashtag "></i>
        </div>
        <h1 class="text-2xl p-3 pl-0 font-bold">Welcome to #about</h1>
        <p class="text-xs pb-4 font-light">
          This is the start of #about channel.{" "}
          <span class="capitalize ">About our services</span>
        </p>
        <hr class="pb-3 border-gray-hr " />
      </div>

      {bodyChatData.map((chat) => (
        <div key={chat} class="">
          <div class=" pl-4 mt-2  hover:bg-gray-content-hover py-2 relative group">
            <div class="flex">
              <div class="">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://hrdelwar.netlify.app/static/media/hr.delwarpng.f5691cd6.png"
                  alt="user"
                />
              </div>
              <div class="flex-1 pl-4">
                <div class="flex flex-col">
                  <div class="">
                    <span class="text-gray-400 pb-0 cursor-pointer hover:border-b hover:border-gray-400 text-xs">
                      Hrdelwar
                    </span>
                    <span class="text-gray-500   text-xs pl-2">09/10/2020</span>
                  </div>
                  <p class=" text-xs pt-2">
                    <span class="rounded text-blue-300 hover:bg-blue-500 hover:text-white cursor-pointer  p-1 bg-gray-700 ">
                      @tom
                    </span>
                    Dear I know, but if I want to do it, I want to do it right.
                    Anyway, it will be up before the end of this month
                  </p>
                </div>
              </div>
            </div>
            <div class="absolute hidden group-hover:block right-3 -top-4 bg-gray-content border rounded hover:shadow-lg border-gray-800">
              <a
                href="/#"
                class="p-1 px-2 hover:bg-gray-content-hover text-gray-500 inline-block "
              >
                <i class="far fa-grin-wink"></i>+
              </a>
              <a
                href="/#"
                class="p-1 px-2 hover:bg-gray-content-hover text-gray-500 inline-block"
              >
                <i class="fal fa-reply-all"></i>
              </a>
              <a
                href="/#"
                class="p-1  px-2 hover:bg-gray-content-hover text-gray-500 inline-block"
              >
                <i class="fal fa-ellipsis-h"></i>
              </a>
            </div>
          </div>
          <div class="pl-20 group relative hover:bg-gray-content-hover py-2">
            <p class=" text-xs pt-2">
              Dear I know, but if I want to do it, I want to do it right.
              Anyway, it will be up before the end of this month
            </p>
            <div class="absolute hidden group-hover:block right-3 -top-4 bg-gray-content border rounded hover:shadow-lg border-gray-800">
              <a
                href="/#"
                class="p-1 px-2 hover:bg-gray-content-hover text-gray-500 inline-block "
              >
                <i class="far fa-grin-wink"></i>+
              </a>
              <a
                href="/#"
                class="p-1 px-2 hover:bg-gray-content-hover text-gray-500 inline-block"
              >
                <i class="fal fa-reply-all"></i>
              </a>
              <a
                href="/#"
                class="p-1  px-2 hover:bg-gray-content-hover text-gray-500 inline-block"
              >
                <i class="fal fa-ellipsis-h"></i>
              </a>
            </div>
            <div class="absolute  left-10 text-gray-500 hidden group-hover:flex -top-1 flex-col">
              <span>7:45</span>
              <span>PM</span>
            </div>
          </div>
          <hr class="pb-3 border-gray-hr " />
        </div>
      ))}
    </div>
  );
};

export default ContentBody;
