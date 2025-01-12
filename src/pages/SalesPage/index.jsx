import React from "react";
import Header from "../../components/layout/header";
import Card from "../../components/layout/card";
import SalesCategory from "../../components/layout/sales/salescategory";
import SalesDailyTrend from "../../components/layout/sales/salesdailytrend";
import SalesOverview from "../../components/layout/sales/salesoverview";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, TrendingUp, Wallet } from "lucide-react";
const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};
function SalesPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Sales Dashboard" />
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4  lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* CARDS */}
          <Card
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <Card
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <Card
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <Card
            name="Total Revenue"
            icon={Wallet}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
          {/* PRODUCTSTABLE */} {/* CHARTS */}
          <div className="flex-col">
            <div className="mb-8">
              <SalesOverview />
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">
              <div className="flex">
                <SalesCategory />
                <SalesDailyTrend />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default SalesPage;
