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
  { name: "Electronics", value: 5400, color: "#8884d8" },
  { name: "Clothing", value: 4100, color: "#82ca9d" },
  { name: "Home & Garden", value: 2700, color: "#ffc658" },
  { name: "Books", value: 1400, color: "#ff8042" },
  { name: "Others", value: 2000, color: "#0088FE" },
];

function SalesCategory() {
  return (
    <motion.div
      className=" w-[600px] ml-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Category
      </h2>
      <div className=" flex flex-col items-center h-80">
        <ResponsiveContainer width={550} height={"70%"}>
          <PieChart width={400} height={200}>
            <Pie
              data={categoryData}
              cx="48%"
              cy="55%"
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
          <div className="flex items-center  text-[#8884d8]">
            <div className="w-4 h-3 bg-[#8884d8] mr-2"></div> Electronics
          </div>
          <div className="flex items-center ml-3 text-[#82ca9d]">
            <div className="w-4 h-3 bg-[#82ca9d] mr-2"></div> Clothing
          </div>
          <div className="flex items-center ml-3 text-[#ffc658]">
            <div className="w-4 h-3 bg-[#ffc658] mr-2"></div> Home & Garden
          </div>
          <div className="flex items-center ml-3 text-[#ff8042]">
            <div className="w-4 h-3 bg-[#ff8042] mr-2"></div> Books
          </div>
          <div>
            <div className="flex items-center ml-3 mt-1 text-[#0088FE]">
              <div className="w-4 h-3 bg-[#0088FE] mr-2"></div> Others
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SalesCategory;
