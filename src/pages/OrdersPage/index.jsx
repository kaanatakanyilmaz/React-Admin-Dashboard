import React from "react";
import Header from "../../components/layout/header";
import CategoryCharts from "../../components/layout/overview/categorycharts";

import ProductsTable from "../../components/layout/products/productstable";
import { motion } from "framer-motion";
import Card from "../../components/layout/card";
import { ShoppingBag, Clock4, CircleCheckBig, DollarSign } from "lucide-react";
import DailyOrders from "../../components/layout/orders/dailyorders";
import OrderStatus from "../../components/layout/orders/orderstatus";
import OrderList from "../../components/layout/orders/orderlist";
function OrdersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Orders Dashboard" />
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
            name="Total Orders"
            icon={ShoppingBag}
            value="1,234"
            color="#6366F1"
          />
          <Card
            name="Pending Orders"
            icon={Clock4}
            value="56"
            color="#F59E0B"
          />
          <Card
            name="Low Stock"
            icon={CircleCheckBig}
            value="1,178"
            color="#10B981"
          />
          <Card
            name="Total Revenue"
            icon={DollarSign}
            value="$98,765"
            color="#EF4444"
          />
          {/* PRODUCTSTABLE */} {/* CHARTS */}
          <div className="flex-col">
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">
              <div className="flex">
                <DailyOrders />
                <OrderStatus />
              </div>
            </div>
            <div className="mt-8">
              <OrderList />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default OrdersPage;
