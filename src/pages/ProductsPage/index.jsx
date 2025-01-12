import React from "react";
import Header from "../../components/layout/header";
import CategoryCharts from "../../components/layout/overview/categorycharts";
import CategoryProducts from "../../components/layout/products/categoryproducts";
import ProductsTable from "../../components/layout/products/productstable";
import { motion } from "framer-motion";
import Card from "../../components/layout/card";
import { Boxes, TrendingUp, TriangleAlert, DollarSign } from "lucide-react";
function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Products Dashboard" />
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
            name="Total Products"
            icon={Boxes}
            value="1234"
            color="#6366F1"
          />
          <Card
            name="Top Selling"
            icon={TrendingUp}
            value="89"
            color="#10B981"
          />
          <Card
            name="Low Stock"
            icon={TriangleAlert}
            value="1234"
            color="#F59E0B"
          />
          <Card
            name="Total Revenue"
            icon={DollarSign}
            value="1234"
            color="#EF4444"
          />
          {/* PRODUCTSTABLE */} {/* CHARTS */}
          <div className="flex-col">
            <div className="mb-8">
              <ProductsTable />
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">
              <div className="flex">
                <CategoryProducts />
                <CategoryCharts />
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default ProductsPage;
