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
  { name: "Website", sales: 45000, color: "#6366f1" },
  { name: "Mobile App", sales: 35000, color: "#8B5CF6" },
  { name: "Marketplace", sales: 30000, color: "#EC4899" },
  { name: "Social Media", sales: 17000, color: "#10B981" },
];

function SalesCharts() {
  return (
    <motion.div
      className=" w-[1215px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg lg:col-span-2 border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales By Channel
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={1160} height={"100%"}>
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
            <Legend />
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

export default SalesCharts;
