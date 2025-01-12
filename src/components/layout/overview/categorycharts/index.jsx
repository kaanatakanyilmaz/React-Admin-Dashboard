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
  { name: "Electronics", value: 4500, color: "#6366f1" },
  { name: "Clothing", value: 3200, color: "#8B5CF6" },
  { name: "Home & Garden", value: 2800, color: "#EC4899" },
  { name: "Books", value: 2100, color: "#10B981" },
  { name: "Sports & Outdoors", value: 1900, color: "#F59E0B" },
];

function CategoryCharts() {
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
        <ResponsiveContainer width={550} height={"60%"}>
          <PieChart width={400} height={200}>
            <Pie
              data={categoryData}
              cx="48%"
              cy="50%"
              labelLine={false}
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
          <div className="flex items-center  text-[#6366f1]">
            <div className="w-4 h-3 bg-[#6366f1] mr-2"></div> Electronics
          </div>
          <div className="flex items-center ml-3 text-[#8B5CF6]">
            <div className="w-4 h-3 bg-[#8B5CF6] mr-2"></div> Clothing
          </div>
          <div className="flex items-center ml-3 text-[#EC4899]">
            <div className="w-4 h-3 bg-[#EC4899] mr-2"></div> Home & Garden
          </div>
          <div className="flex items-center ml-3 text-[#10B981]">
            <div className="w-4 h-3 bg-[#10B981] mr-2"></div> Books
          </div>
          <div>
            <div className="flex items-center ml-3 mt-1 text-[#F59E0B]">
              <div className="w-4 h-3 bg-[#F59E0B] mr-2"></div> Sports &
              Outdoors
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCharts;
