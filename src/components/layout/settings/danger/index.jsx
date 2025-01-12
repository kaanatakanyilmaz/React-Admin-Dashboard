import React from "react";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
function DangerZone() {
  return (
    <motion.div
      className=" w-[1000px] bg-red-900 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="flex">
          <Trash2 className="text-red-700 mr-2" />
          <p className="font-bold text-xl">Danger Zone</p>
        </div>
        <p className="mt-4">
          Permanently delete your account and all of your content
        </p>

        <button className="bg-red-700 hover:bg-red-600 py-2 px-4 rounded mt-4">
          Delete Account
        </button>
      </div>
    </motion.div>
  );
}

export default DangerZone;
