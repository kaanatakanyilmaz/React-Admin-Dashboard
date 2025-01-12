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
  { name: "Organic Search", value: 3900, color: "#8884d8" },
  { name: "Paid Search", value: 2900, color: "#82ca9d" },
  { name: "Direct", value: 1800, color: "#ffc658" },
  { name: "Social Media", value: 2600, color: "#ff8042" },
  { name: "Referral", value: 1900, color: "#0088FE" },
  { name: "Email", value: 2200, color: "#00C49F" },
];

function ChannelPerformance() {
  return (
    <motion.div
      className=" w-[600px]  bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Channel Performance
      </h2>
      <div className=" flex flex-col items-center h-80">
        <ResponsiveContainer width={550} height={"60%"}>
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
          <div className="flex items-center  text-[#8884d8]">
            <div className="w-4 h-3 bg-[#8884d8] mr-2"></div> Organic Search
          </div>

          <div className="flex items-center ml-3 text-[#82ca9d]">
            <div className="w-4 h-3 bg-[#82ca9d] mr-2"></div> Paid Search
          </div>
          <div className="flex items-center ml-3 text-[#ffc658]">
            <div className="w-4 h-3 bg-[#ffc658] mr-2"></div> Direct
          </div>
          <div className="flex items-center ml-3 text-[#ff8042]">
            <div className="w-4 h-3 bg-[#ff8042] mr-2"></div> Social Media
          </div>
          <div className="flex items-center ml-3 text-[#0088FE]">
            <div className="w-4 h-3 bg-[#0088FE] mr-2"></div> Referral
          </div>
          <div>
            <div className="flex items-center ml-3 mt-1 text-[#00C49F]">
              <div className="w-4 h-3 bg-[#00C49F] mr-2"></div> Email
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ChannelPerformance;
