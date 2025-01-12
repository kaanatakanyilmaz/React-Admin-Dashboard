import React, { useState } from "react";
import SettingSection from "../settingSection";
import { CreditCard } from "lucide-react";

function Biling() {
  return (
    <SettingSection icon={CreditCard} title={"Biling"}>
      <div className=" flex flex-col justify-center mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p>Language</p>
          </div>
          <div>
            <p className="text-indigo-600 font-bold">Pro</p>
          </div>
        </div>
        <button className="mt-6 w-[150px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200   ">
          Upgrade Plan
        </button>
      </div>
    </SettingSection>
  );
}

export default Biling;
