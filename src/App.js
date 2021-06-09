import "./App.css";
import TopHeader from "./components/TopHeader";
import "./assets/js/fontawesome";
import Sidebar from "./components/Sidebar";
import IconBar from "./components/IconBar";
import RightSidebar from "./components/RightSidebar";
import ContentBody from "./components/ContentBody";
import { useState } from "react";

function App() {
  const [toggleRightSidebar, setToggleRightSidebar] = useState(false);
  const [toggleLeftSidebar, setToggleLeftSidebar] = useState(false);

  return (
    <>
      <section class="flex font-body overflow-hidden">
        <IconBar className="hidden md:block" />
        <Sidebar className={toggleLeftSidebar ? " transition" : "transition hidden lg:flex"} />
        <section class="flex-1 sidebar flex flex-col bg-gray-sidebar text-white w-56 h-screen">
          <TopHeader
            setToggleRightSidebar={setToggleRightSidebar}
            toggleRightSidebar={toggleRightSidebar}
            setToggleLeftSidebar={setToggleLeftSidebar}
            toggleLeftSidebar={toggleLeftSidebar}
          />
          <div class="flex-1 flex  overflow-y-auto">
            <div class="flex-1 flex overflow-y-auto flex-col">
              <div class="flex-1 flex  overflow-y-auto justify-between flex-col">
                <div class="flex-1">
                  <ContentBody />
                </div>
              </div>
              <div class=" flex bg-gray-content h-12 justify-between items-center px-4  pb-0">
                <div class=" flex justify-between bg-gray-input rounded p-2 w-full -mt-8  z-50  ">
                  <div class="flex items-center justify-center w-full flex-1">
                    <a href="/#" class="inline-block px-2">
                      <i class="fas fa-plus-circle"></i>
                    </a>
                    <input
                      rows="1"
                      contenteditable="true"
                      class="pl-5 w-full flex-1 inline-block focus:outline-none bg-gray-input"
                      placeholder="Message #feedback"
                    />
                  </div>
                  <div class="">
                    <a href="/#" class="px-2 inline-block">
                      <i class="fas fa-gift"></i>
                    </a>
                    <a href="/#" class="px-2 inline-block">
                      <i class="fas fa-hat-cowboy-side"></i>
                    </a>
                    <a href="/#" class="px-2 inline-block">
                      <i class="fas fa-surprise"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <RightSidebar
              className={toggleRightSidebar ? " transition" : "transition hidden lg:block"}
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
