import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

import { Search } from "lucide-react";

const orderData = [
  {
    id: "ORD001",
    customer: "John Doe",
    total: 235.4,
    status: "Delivered",
    date: "2023-07-01",
  },
  {
    id: "ORD002",
    customer: "Jane Smith",
    total: 412.0,
    status: "Processing",
    date: "2023-07-02",
  },
  {
    id: "ORD003",
    customer: "Bob Johnson",
    total: 162.5,
    status: "Shipped",
    date: "2023-07-03",
  },
  {
    id: "ORD004",
    customer: "Alice Brown",
    total: 750.2,
    status: "Pending",
    date: "2023-07-04",
  },
  {
    id: "ORD005",
    customer: "Charlie Wilson",
    total: 95.8,
    status: "Delivered",
    date: "2023-07-05",
  },
  {
    id: "ORD006",
    customer: "Eva Martinez",
    total: 310.75,
    status: "Processing",
    date: "2023-07-06",
  },
  {
    id: "ORD007",
    customer: "David Lee",
    total: 528.9,
    status: "Shipped",
    date: "2023-07-07",
  },
  {
    id: "ORD008",
    customer: "Grace Taylor",
    total: 189.6,
    status: "Delivered",
    date: "2023-07-08",
  },
];

export default function OrderList() {
  const [search, setSearch] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    const filteredData = orderData.filter(
      (order) =>
        order.id
          .trim()
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        order.customer
          .trim()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );
    setFilteredOrders(filteredData);
  };
  return (
    <motion.div
      className=" w-[1220px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div>
        <div className="flex justify-between items-center ">
          <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder=" Search orders..."
              className="pl-9 p-1 py-2 bg-gray-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={handleChange}
            />
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          </div>
        </div>
      </div>
      <div>
        <table className="min-w-full divide-y divide-gray-700 mt-5">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredOrders.map((order, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <td className="py-4 px-6  text-left flex items-center gap-2 text-gray-100">
                  {order.id}
                </td>
                <td className="py-4 px-6  text-left text-gray-100">
                  {order.customer}
                </td>
                <td className="py-4 px-6  text-left  text-gray-100">
                  ${order.total.toFixed(2)}
                </td>
                <td className="py-4 px-6  text-left  text-gray-100">
                  <div>
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6  text-left   text-gray-100">
                  {order.date}
                </td>
                <td className="py-4 px-6  text-left text-xs font-medium text-gray-400">
                  <button className="text-indigo-400 hover:text-indigo-300 ">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
