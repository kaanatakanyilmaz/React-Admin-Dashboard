import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Trash2 } from "lucide-react";

import { Search } from "lucide-react";

const productsData = [
  {
    name: "Airpods",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
  },
  {
    name: "Leader Wallet",
    category: "Accessories",
    price: 39.99,
    stock: 89,
    sales: 800,
  },
  {
    name: "Apple Watch",
    category: "Electronics",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    name: "Yoga Mat",
    category: "Fitness",
    price: 29.99,
    stock: 210,
    sales: 950,
  },
  {
    name: "Airpods",
    category: "Home",
    price: 79.99,
    stock: 78,
    sales: 720,
  },
];

export default function ProductsTable() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredproducts] = useState(productsData);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    const filteredData = productsData.filter(
      (product) =>
        product.name
          .trim()
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        product.category
          .trim()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );
    setFilteredproducts(filteredData);
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
          <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder=" Search products..."
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
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {filteredProducts.map((products, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <td className="py-4 px-6  text-left flex items-center gap-2 text-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-10 h-10 rounded-full"
                    alt="Product img"
                  />
                  {products.name}
                </td>
                <td className="py-4 px-6  text-left text-gray-100">
                  {products.category}
                </td>
                <td className="py-4 px-6  text-left  text-gray-100">
                  ${products.price.toFixed(2)}
                </td>
                <td className="py-4 px-6  text-left  text-gray-100">
                  {products.stock}
                </td>
                <td className="py-4 px-6  text-left   text-gray-100">
                  {products.sales}
                </td>
                <td className="py-4 px-6  text-left text-xs font-medium text-gray-400">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300 ">
                    <Trash2 size={18} />
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
