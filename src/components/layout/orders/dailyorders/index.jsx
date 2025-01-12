import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

const ordersData = [
  { name: "07/01", orders: 43 },
  { name: "07/02", orders: 50 },
  { name: "07/03", orders: 45 },
  { name: "07/04", orders: 60 },
  { name: "07/05", orders: 53 },
  { name: "07/06", orders: 59 },
  { name: "07/07", orders: 61 },
];
function DailyOrders() {
  return (
    <motion.div
      className=" w-[600px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Daily Orders</h2>
      <div className="h-80">
        <ResponsiveContainer width={550} height={"100%"}>
          <LineChart data={ordersData}>
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
              dataKey="orders"
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default DailyOrders;
