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

const userData = [
  { name: "Week 1", retention: 100 },
  { name: "Week 2", retention: 75 },
  { name: "Week 3", retention: 60 },
  { name: "Week 4", retention: 50 },
  { name: "Week 5", retention: 45 },
  { name: "Week 6", retention: 40 },
  { name: "Week 7 ", retention: 38 },
  { name: "Week 8", retention: 35 },
];

function UserRetention() {
  return (
    <motion.div
      className=" w-[600px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">User Retention</h2>
      <div className="h-80">
        <ResponsiveContainer width={550} height={"100%"}>
          <LineChart data={userData}>
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
              dataKey="retention"
              stroke="#6366F1"
              strokeWidth={4}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default UserRetention;
