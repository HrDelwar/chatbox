import React from "react";
import { topicData } from "../assets/js/fakeData/topicData";
import LeftBottomUserDetails from "./LeftBottomUserDetails";
import Topics from "./Topics";

const Sidebar = ({className}) => {
  return (
    <section class={"sidebar flex flex-col bg-gray-sidebar text-white w-56 h-screen " + className}>
      <header
        class="flex justify-between items-center  px-4 shadow-bottom text-xs hover:bg-gray-content cursor-pointer"
        style={{ padding: "13px 1rem" }}
      >
        <span class="capitalize inline-block  ">laravel unofficial</span>
        <span class=" ">
          {" "}
          <a href="/#" class=" ">
            <i class="fas fa-chevron-down  "></i>
          </a>
        </span>
      </header>

      <section class="flex-1 flex overflow-y-auto justify-between flex-col">
        <div>
          {topicData.map((singleTopic) => (
            <Topics singleTopic={singleTopic} key={singleTopic.id} />
          ))}
          <div class="pt-3">
            <div class=" pr-2 flex  cursor-pointer text-gray-400 hover:text-gray-300 font-semibold">
              <span class="fad fa-chevron-down p-1"></span>
              <span class="truncate pl-1 uppercase">voice</span>
            </div>
            <ul class="list-disc ml-3 p-0">
              <li
                tabindex="1"
                class="group hover:bg-gray-hover focus:bg-gray-hover outline-none rounded cursor-pointer relative p-1 pr-0 mr-1 "
              >
                <div class=" inline-block group">
                  <a href="/#" class="focus:outline-none  group">
                    <i class="fal fa-volume text-gray-500 pr-2 pl-1 lowercase"></i>
                    <span>cafe_lounge</span>
                  </a>
                </div>
                <div class="group-item group-focus:inline-block   group-hover:inline-block hidden absolute right-0 ">
                  <span>
                    <i class="fad fa-user-plus"></i>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <LeftBottomUserDetails />
    </section>
  );
};

export default Sidebar;
