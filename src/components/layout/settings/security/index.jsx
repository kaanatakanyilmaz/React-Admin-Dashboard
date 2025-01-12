import React from "react";
import SettingSection from "../settingSection";
import { Lock } from "lucide-react";

function Security() {
  return (
    <SettingSection icon={Lock} title={"Security"}>
      <div className=" flex flex-col justify-center mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-300">Two-Factor Authentication</p>
          </div>
          <div>
            <label className="relative flex flex-col justify-center">
              <input type="checkbox" class="sr-only peer" />
              <span class=" w-[40px] h-[15px]  bg-[#939393] peer-checked:bg-indigo-400 rounded-full  transition duration-300"></span>
              <span class="absolute  left-0 w-5 h-5 bg-[#fff] peer-checked:bg-indigo-600 rounded-full shadow-md peer-checked:translate-x-6 transition-transform duration-300"></span>
            </label>
          </div>
        </div>
        <button className="mt-8 w-[180px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2  rounded transition duration-200 ">
          Change Password
        </button>
      </div>
    </SettingSection>
  );
}

export default Security;
