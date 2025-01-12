import React from "react";
import Card from "../../components/layout/card";
import OverviewCharts from "../../components/layout/overview/overviewcharts";
import CategoryCharts from "../../components/layout/overview/categorycharts";
import SalesCharts from "../../components/layout/overview/salescharts";
import Header from "../../components/layout/header";
import { Zap } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Users } from "lucide-react";
import { BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
function OverviewPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Overview Dashboard" />
      </header>

      <main className=" max-w-7xl mx-auto py-6 px-4  lg:px-8  ">
        {/* CARDS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card name="Total Sales" icon={Zap} value="$12,345" color="#6366F1" />
          <Card name="New Users" icon={Users} value="1,234" color="#8B5CF6" />
          <Card
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <Card
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />

          {/* CHARTS */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 ">
              <div className="flex">
                <OverviewCharts />
                <CategoryCharts />
              </div>
              <SalesCharts />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default OverviewPage;
