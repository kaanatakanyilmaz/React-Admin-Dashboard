import React from "react";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

function AlPoweredInsights() {
  return (
    <motion.div
      className=" w-[1200px] ml-4 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Al-Powered Insights
      </h2>

      <div>
        <div className="flex">
          <div>
            <TrendingUp className="text-green-500 mr-4" />
          </div>
          <p>
            Revenue is up 15% compared to last month, driven primarily by a
            successful email campaign.
          </p>
        </div>
        <div className="flex mt-7">
          <div>
            <Users className="text-blue-500 mr-4" />
          </div>
          <p>
            Customer retention has improved by 8% following the launch of the
            new loyalty program.
          </p>
        </div>
        <div className="flex mt-7">
          <div>
            <ShoppingBag className="text-purple-500 mr-4" />
          </div>
          <p>
            Product category "Electronics" shows the highest growth potential
            based on recent market trends.
          </p>
        </div>
        <div className="flex mt-7">
          <div>
            <DollarSign className="text-yellow-500 mr-4" />
          </div>
          <p>
            Optimizing pricing strategy could potentially increase overall
            profit margins by 5-7%.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default AlPoweredInsights;
