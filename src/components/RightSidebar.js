import React from "react";

const users = [...Array(100).keys()];

const RightSidebar = ({className}) => {
  return (
    <div class={"w-56 overflow-y-auto " + className }>
      <div class="">
        {users.map((user) => (
          <div key={user} className="text-gray-300 flex mt-1  items-center hover:bg-gray-hover p-1">
            <img
              src="https://hrdelwar.netlify.app/static/media/hr.delwarpng.f5691cd6.png"
              alt="user"
              class="w-8 h-8 rounded-full"
            />
            <p className="ml-6">Hr Delwar</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
