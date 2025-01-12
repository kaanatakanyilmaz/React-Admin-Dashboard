import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "Jan", sales: 1100 },
  { name: "Feb", sales: 1500 },
  { name: "Mar", sales: 1700 },
  { name: "Apr", sales: 3000 },
  { name: "May", sales: 4300 },
  { name: "Jun", sales: 4700 },
];

function UserGrowth() {
  return (
    <motion.div
      className=" w-[600px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Growth</h2>
      <div className="h-80">
        <ResponsiveContainer width={550} height={"100%"}>
          <LineChart data={salesData}>
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
            <Line
              type="linear"
              dataKey="sales"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserGrowth;
