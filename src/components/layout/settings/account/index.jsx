import React, { useState } from "react";
import SettingSection from "../settingSection";
import { BadgeInfo } from "lucide-react";
import classNames from "classnames";

function Account() {
  const [selectGoogle, setSelecGoogle] = useState(false);
  const [selectFacebook, setSelecFacebook] = useState(false);
  const [selectX, setSelecX] = useState(false);
  return (
    <SettingSection icon={BadgeInfo} title={"Connected Account"}>
      <div className=" flex flex-col justify-center mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
              alt=""
              className="h-8 w-8 mr-2"
            />
            <p>Google</p>
          </div>
          <button
            className={classNames(
              " w-[150px] text-white  py-2  rounded transition duration-200",
              {
                "bg-green-800 hover:bg-green-700": selectGoogle === true,
                "bg-gray-600 hover:bg-gray-500 ": selectGoogle === false,
              }
            )}
            onClick={() => setSelecGoogle((prevState) => !prevState)}
          >
            {selectGoogle ? "Connected" : "Connect"}
          </button>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"
              alt=""
              className="h-8 w-8 mr-2"
            />
            <p>Facebook</p>
          </div>
          <button
            className={classNames(
              " w-[150px] text-white  py-2  rounded transition duration-200",
              {
                "bg-green-800 hover:bg-green-700": selectFacebook === true,
                "bg-gray-600 hover:bg-gray-500 ": selectFacebook === false,
              }
            )}
            onClick={() => setSelecFacebook((prevState) => !prevState)}
          >
            {selectFacebook ? "Connected" : "Connect"}
          </button>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/027/395/710/small_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png"
              alt=""
              className="h-8 w-8 mr-2"
            />
            <p>X</p>
          </div>
          <button
            className={classNames(
              " w-[150px] text-white  py-2  rounded transition duration-200",
              {
                "bg-green-800 hover:bg-green-700": selectX === true,
                "bg-gray-600 hover:bg-gray-500 ": selectX === false,
              }
            )}
            onClick={() => setSelecX((prevState) => !prevState)}
          >
            {selectX ? "Connected" : "Connect"}
          </button>
        </div>
      </div>
    </SettingSection>
  );
}

export default Account;
