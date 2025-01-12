import SettingSection from "../settingSection";
import { User } from "lucide-react";
function Profile() {
  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className=" flex flex-col justify-center mb-6">
        <div className="flex">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            className="h-20 w-20 mr-4 rounded-full"
            alt=""
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-100">John Doe </h3>
            <p className="text-gray-400">katakan2828@gmail.com</p>
          </div>
        </div>
        <button className="mt-6 w-[120px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200   ">
          Edit Profile
        </button>
      </div>
    </SettingSection>
  );
}

export default Profile;
