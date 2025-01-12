import React from "react";
import { motion } from "framer-motion";

function Cards({
  name,
  icon: Icon,
  value,
  color,
  descriptionValue,
  description,
}) {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg  border border-gray-700 p-2"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5) " }}
    >
      <div className="px-4 py-5 sm:p-6">
        <div className="flex justify-between items-center">
          <div>
            <motion.span className="flex items-center text-gray-400  ">
              {name}
            </motion.span>
            <span className="text-xl font-bold mt-1 ">{value}</span>
          </div>
          <div>
            <Icon color={color} size={24} className="mr-2" />
          </div>
        </div>
        <div className="mt-2 text-xm">
          <span className="text-[#10B981] mr-1">{descriptionValue}</span>
          <span className="text-gray-400">{description}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
