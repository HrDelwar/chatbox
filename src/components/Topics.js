import React from "react";

const Topics = ({ singleTopic }) => {
  return (
    <div class="pt-3">
      <div class="cursor-pointer  pr-2 flex text-gray-400 hover:text-gray-300 font-semibold">
        <span class="fad fa-chevron-down p-1"></span>
        <span class="truncate pl-1 uppercase">{singleTopic.title}</span>
      </div>
      <ul class="list-disc ml-3 p-0">
        {singleTopic.topics.map((topic, index) => (
          <li
            key={index}
            tabindex="1"
            class="group hover:bg-gray-hover focus:bg-gray-hover outline-none rounded cursor-pointer relative p-1 pr-0 mr-1 "
          >
            <div class=" inline-block group">
              <a href="/#" class="focus:outline-none  group">
                <i class="far fa-hashtag text-gray-500 pr-2 pl-1 lowercase"></i>
                <span>{topic}</span>
              </a>
            </div>
            <div class="group-item group-focus:inline-block   group-hover:inline-block hidden absolute right-0 ">
              <span>
                <i class="fad fa-user-plus"></i>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
