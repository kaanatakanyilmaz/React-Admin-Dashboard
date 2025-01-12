import React from "react";
import { useState } from "react";
import { sidebarItems } from "../../../utils/const";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";
import { Menu, ChartNoAxesColumn } from "lucide-react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <motion.div
      className={classNames(
        " relative z-10  transition-all duration-300 ease-in-out flex-shrink-0",
        {
          "w-20": !isSideBarOpen,
          "w-64": isSideBarOpen,
        }
      )}
      // className={` z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
      //   isSideBarOpen ? "w-64" : "w-20"
      // }`}
      animate={{
        width: isSideBarOpen ? 256 : 80,
      }}
    >
      <div className="h-screen bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          className=" p-2 rounded-full hover:bg-gray-500 transition-colors max-w-fit"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow items-center justify-start">
          {sidebarItems?.map((item, index) => (
            <Link key={index} to={item.path}>
              <motion.div
                className={classNames(
                  "flex items-center p-4 font-medium text-sm hover:bg-gray-700 transition-colors",
                  {
                    "rounded-lg": isSideBarOpen,
                    "items-center justify-start rounded-xl  ": !isSideBarOpen,
                  }
                )}
              >
                <item.icon
                  className="mr-2 min-w-[24px]"
                  size={24}
                  color={item.color}
                />
                <AnimatePresence>
                  {isSideBarOpen && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, x: -20 }}
                      animate={{ opacity: 1, width: "auto", x: 10 }}
                      exit={{ opacity: 0, width: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default SideBar;
