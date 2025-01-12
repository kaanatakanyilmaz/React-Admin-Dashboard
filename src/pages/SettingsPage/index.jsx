import React from "react";
import Header from "../../components/layout/header";

import { motion } from "framer-motion";
import Profile from "../../components/layout/settings/profile";
import Notification from "../../components/layout/settings/notifications";
import Security from "../../components/layout/settings/security";
import Language from "../../components/layout/settings/language";
import Biling from "../../components/layout/settings/biling";
import Account from "../../components/layout/settings/account";
import DangerZone from "../../components/layout/settings/danger";

function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <header>
        <Header title="Settings" />
      </header>

      <main className="max-w-6xl mx-auto py-6 px-4  lg:px-8 ">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div>
              <Profile />
            </div>
            <div className="mt-8">
              <Notification />
            </div>
            <div className="mt-8">
              <Security />
            </div>
            <div className="mt-8">
              <Language />
            </div>
            <div className="mt-8">
              <Biling />
            </div>
            <div className="mt-8">
              <Account />
            </div>
            <div className="mt-8">
              <DangerZone />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default SettingsPage;
