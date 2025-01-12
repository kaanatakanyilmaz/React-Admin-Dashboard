import React from "react";
import { motion } from "framer-motion";

function Card({ name, icon: Icon, value, color }) {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg  border border-gray-700 p-4"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5) " }}
    >
      <div className="px-4 py-5 sm:p-6">
        <motion.span className="flex items-center text-gray-400  ">
          <Icon color={color} size={24} className="mr-2" />
          {name}
        </motion.span>
        <span className="text-3xl font-bold mt-1 ">{value}</span>
      </div>
    </motion.div>
  );
}

export default Card;
