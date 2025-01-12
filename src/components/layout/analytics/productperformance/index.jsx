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
  LabelList,
} from "recharts";
import { motion } from "framer-motion";

const productData = [
  {
    name: "Product A",
    sales: 4000,
    revenue: 2400,
    profit: 2400,
    color: "#6366f1",
  },
  {
    name: "Product B",
    sales: 3000,
    revenue: 1398,
    profit: 2210,
    color: "#8B5CF6",
  },
  {
    name: "Product C",
    sales: 2000,
    revenue: 9800,
    profit: 2290,
    color: "#EC4899",
  },
  {
    name: "Product D",
    sales: 2780,
    revenue: 3908,
    profit: 2000,
    color: "#10B981",
  },
  {
    name: "Product E",
    sales: 1890,
    revenue: 4800,
    profit: 2181,
    color: "#10B981",
  },
];

function ProductPerformance() {
  return (
    <motion.div
      className=" w-[600px] ml-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg lg:col-span-2 border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Product Performance
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={productData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8B5CF6" minPointSize={5}>
              <LabelList dataKey="value" />
            </Bar>
            <Bar dataKey="revenue" fill="#10B981" minPointSize={10} />
            <Bar dataKey="profit" fill="#F59E0B" minPointSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default ProductPerformance;
{
  /* <Bar dataKey={"sales"} fill="#8884d8">
              {salesData.map((sales, index) => (
                <Cell key={`cell-${index}`} fill={sales.color} />
              ))}
            </Bar> */
}
