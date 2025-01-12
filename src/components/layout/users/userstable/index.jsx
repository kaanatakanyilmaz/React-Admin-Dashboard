import { button } from "framer-motion/client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Search, Edit, Trash2 } from "lucide-react";
import classNames from "classnames";
const usersData = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];

function UsersTable() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(usersData);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);

    const data = usersData.filter(
      (user) =>
        user.name
          .trim()
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        user.email
          .trim()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
    );
    setFilteredUsers(data);
  };

  return (
    <motion.div
      className=" w-[1220px] bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-100">Users</h2>
          <div className="relative">
            <input
              type="text"
              placeholder=" Search users..."
              value={search}
              onChange={handleChange}
              className="pl-9 p-1 py-2 bg-gray-700 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((users, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <td className="py-4 px-6  text-left gap-2 text-gray-100">
                  <div className="flex items-center">
                    <div className="flex shrink-0 h-10 w-10 mr-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                        {users.name.charAt(0)}
                      </div>
                    </div>
                    <div className="text-gray-100">{users.name}</div>
                  </div>
                </td>
                <td className="py-4 px-6  text-left text-gray-100">
                  {users.email}
                </td>
                <td className="py-4 px-6  text-left  text-gray-100">
                  <button className="px-4  bg-blue-900 text-white rounded-full">
                    {users.role}
                  </button>
                </td>
                <td className="py-4 px-6  text-left  text-gray-100">
                  <button
                    className={classNames(
                      " px-4 rounded-full text-left  text-gray-100",
                      {
                        "bg-green-800 text-green-100":
                          users.status === "Active",
                        "bg-red-800 text-red-100": users.status === "Inactive",
                      }
                    )}
                  >
                    {users.status}
                  </button>
                </td>

                <td className="py-4 px-6  text-left text-xs font-medium text-gray-400">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300 ">
                    Delete
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

export default UsersTable;
