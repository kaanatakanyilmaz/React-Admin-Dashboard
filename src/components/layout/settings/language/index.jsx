import React, { useState } from "react";
import SettingSection from "../settingSection";
import { Globe } from "lucide-react";

function Language() {
  const [selectedTime, setSelectedTime] = useState("Turkish");
  return (
    <SettingSection icon={Globe} title={"Language & Region"}>
      <div className=" flex flex-col justify-center mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p>Language</p>
          </div>
          <div>
            <select
              className="bg-gray-700 w-[120px] text-white rounded-md px-3 py-1 focus:outline-none focus:right-2 focus:ring-blue-500"
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
            >
              <option>English</option>
            </select>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div>
            <p>Curreny</p>
          </div>
          <div>
            <select
              className="bg-gray-700 w-[120px] text-white rounded-md px-3 py-1 focus:outline-none focus:right-2 focus:ring-blue-500"
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
            >
              <option>$ - Dolar</option>
            </select>
          </div>
        </div>
      </div>
    </SettingSection>
  );
}

export default Language;
