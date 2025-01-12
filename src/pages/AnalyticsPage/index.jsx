import React from "react";
import Header from "../../components/layout/header";

import { motion } from "framer-motion";
import Cards from "../../components/layout/cardanalytics";
import { Eye, DollarSign, ShoppingBag, Users } from "lucide-react";
import RevenueTarget from "../../components/layout/analytics/revenuetarget";
import ChannelPerformance from "../../components/layout/analytics/channelperformance";
import ProductPerformance from "../../components/layout/analytics/productperformance";
import UserRetention from "../../components/layout/analytics/userretention";
import CustomerSegmentation from "../../components/layout/analytics/customersegmentatiton";
import AlPoweredInsights from "../../components/layout/analytics/alpoweredinsights";
function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Analytics Dashboard" />
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4  lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* CARDS */}
          <Cards
            name="Revenue"
            icon={DollarSign}
            value="$1,234,567"
            color="#10B981"
            descriptionValue="12.5%"
            description="vs last period"
          />
          <Cards
            name="Users"
            icon={Users}
            value="45,678"
            color="#10B981"
            descriptionValue="8.3%"
            description="vs last period"
          />
          <Cards
            name="Orders"
            icon={ShoppingBag}
            value="9,876"
            color="#10B981"
            descriptionValue="8.2%"
            description="vs last period"
          />
          <Cards
            name="Page Views"
            icon={Eye}
            value="1,234,567"
            color="#10B981"
            descriptionValue="15.7%"
            description="vs last period"
          />
          {/* PRODUCTSTABLE */} {/* CHARTS */}
          <div className="flex-col">
            <div className="flex">
              <RevenueTarget />
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">
              <div className="flex flex-wrap">
                <div className="flex mt-8">
                  <ChannelPerformance />
                  <ProductPerformance />
                </div>
                <div className="flex mt-8">
                  <UserRetention />
                  <CustomerSegmentation />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <AlPoweredInsights />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default AnalyticsPage;
