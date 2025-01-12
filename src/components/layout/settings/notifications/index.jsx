import React from "react";
import SettingSection from "../settingSection";
import { Bell } from "lucide-react";

function Notification() {
  return (
    <SettingSection icon={Bell} title={"Notifications"}>
      <div className=" flex flex-col justify-center mb-6">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-300">Push Notifications</p>
            </div>
            <div>
              <label className="relative flex flex-col justify-center">
                <input type="checkbox" class="sr-only peer" />
                <span class=" w-[40px] h-[15px]  bg-[#939393] peer-checked:bg-indigo-400 rounded-full  transition duration-300"></span>
                <span class="absolute  left-0 w-5 h-5 bg-[#fff] peer-checked:bg-indigo-600 rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300"></span>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center  mt-6">
            <div>
              <p className="text-gray-300">Email Notifications</p>
            </div>
            <div>
              <label className="relative flex flex-col justify-center">
                <input type="checkbox" class="sr-only peer" />
                <span class=" w-[40px] h-[15px]  bg-[#939393] peer-checked:bg-indigo-400 rounded-full  transition duration-300"></span>
                <span class="absolute  left-0 w-5 h-5 bg-[#fff] peer-checked:bg-indigo-600 rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300"></span>
              </label>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-gray-300">SMS Notifications</p>
            </div>
            <div>
              <label className="relative flex flex-col justify-center">
                <input type="checkbox" class="sr-only peer" />
                <span class=" w-[40px] h-[15px]  bg-[#939393] peer-checked:bg-indigo-400 rounded-full  transition duration-300"></span>
                <span class="absolute  left-0 w-5 h-5 bg-[#fff] peer-checked:bg-indigo-600 rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </SettingSection>
  );
}

export default Notification;
