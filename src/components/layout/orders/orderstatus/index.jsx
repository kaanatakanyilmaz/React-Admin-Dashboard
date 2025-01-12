import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

const categoryData = [
  { name: "Pending", value: 2000, color: "#4ECDC4" },
  { name: "Processing", value: 2600, color: "#45B7D1" },
  { name: "Shipped", value: 5100, color: "#FED766" },
  { name: "Delivered", value: 1300, color: "#FF6B6B" },
];

function OrderStatus() {
  return (
    <motion.div
      className=" w-[600px] ml-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Category Distribution
      </h2>
      <div className=" flex flex-col items-center h-80">
        <ResponsiveContainer width={550} height={"80%"}>
          <PieChart width={400} height={200}>
            <Pie
              data={categoryData}
              cx="48%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) =>
                `${name} - ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-wrap justify-center py-4 mt-12 leading-5">
          <div className="flex items-center  text-[#4ECDC4]">
            <div className="w-4 h-3 bg-[#4ECDC4] mr-2"></div> Pending
          </div>
          <div className="flex items-center ml-3 text-[#45B7D1]">
            <div className="w-4 h-3 bg-[#45B7D1] mr-2"></div> Processing
          </div>
          <div className="flex items-center ml-3 text-[#FED766]">
            <div className="w-4 h-3 bg-[#FED766] mr-2"></div> Shipped
          </div>
          <div className="flex items-center ml-3 text-[#FF6B6B]">
            <div className="w-4 h-3 bg-[#FF6B6B] mr-2"></div> Delivered
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default OrderStatus;
