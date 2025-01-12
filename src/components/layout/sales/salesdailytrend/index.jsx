import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
  Legend,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Mon", sales: 900, color: "#10B981" },
  { name: "Tue", sales: 1200, color: "#10B981" },
  { name: "Wed", sales: 820, color: "#10B981" },
  { name: "Thu", sales: 900, color: "#10B981" },
  { name: "Fri", sales: 1300, color: "#10B981" },
  { name: "Sat", sales: 1600, color: "#10B981" },
  { name: "Sun", sales: 1450, color: "#10B981" },
];

function SalesDailyTrend() {
  return (
    <motion.div
      className=" w-[580px] ml-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg lg:col-span-2 border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales By Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={540} height={"100%"}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray={"3 3"} stroke="#4B5563" />
            <XAxis dataKey={"name"} />
            <YAxis stroke="#9ca4af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />

            <Bar dataKey={"sales"} fill="#8884d8">
              {salesData.map((sales, index) => (
                <Cell key={`cell-${index}`} fill={sales.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesDailyTrend;
