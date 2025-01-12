import React from "react";
import Header from "../../components/layout/header";
import UsersTable from "../../components/layout/users/userstable";

import { motion } from "framer-motion";
import Card from "../../components/layout/card";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";
import UserGrowth from "../../components/layout/users/usergrowth";
import UserActivity from "../../components/layout/users/useractivity";
import UserDemographicsChart from "../../components/layout/users/userDemographicsChart";

const userStats = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};
function UsersPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Users Dashboard" />
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4  lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* CARDS */}
          <Card
            name="Total Users"
            icon={Users}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <Card
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color="#10B981"
          />
          <Card
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <Card
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate.toLocaleString()}
            color="#EF4444"
          />
          {/* PRODUCTSTABLE */} {/* CHARTS */}
          <div className="flex-col">
            <div className="mb-8">
              <UsersTable />
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 ">
              <div className="flex flex-col ">
                <div className="flex  gap-4">
                  <UserGrowth />
                  <UserActivity />
                </div>
                <div className="mt-8">
                  <UserDemographicsChart />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default UsersPage;
