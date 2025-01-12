import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const categoryData = [
  { name: "18-24", value: 2700, color: "#8884d8" },
  { name: "25-34", value: 4000, color: "#82ca9d" },
  { name: "55+", value: 3400, color: "#ffc658" },
  { name: "35-44", value: 2000, color: "#ff8042" },
  { name: "45-54", value: 1300, color: "#0088FE" },
];

function UserDemographicsChart() {
  return (
    <motion.div
      className=" w-[1215px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg lg:col-span-2 border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        User Demographics
      </h2>
      <div className=" flex flex-col items-center h-80">
        <ResponsiveContainer width={550} height={"70%"}>
          <PieChart width={400} height={100}>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) =>
                `${name}  ${(percent * 100).toFixed(0)}%`
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
        <div className="flex flex-wrap justify-center py-4 mt-10 leading-5">
          <div className="flex items-center  text-[#8884d8]">
            <div className="w-4 h-3 bg-[#8884d8] mr-2"></div>18-24
          </div>
          <div className="flex items-center ml-3 text-[#82ca9d]">
            <div className="w-4 h-3 bg-[#82ca9d] mr-2"></div> 25-34
          </div>
          <div className="flex items-center ml-3 text-[#ffc658]">
            <div className="w-4 h-3 bg-[#ffc658] mr-2"></div> 55+
          </div>
          <div className="flex items-center ml-3 text-[#ff8042]">
            <div className="w-4 h-3 bg-[#ff8042] mr-2"></div> 35-44
          </div>
          <div>
            <div className="flex items-center ml-3 mt-1 text-[#0088FE]">
              <div className="w-4 h-3 bg-[#0088FE] mr-2"></div>45-54
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UserDemographicsChart;
