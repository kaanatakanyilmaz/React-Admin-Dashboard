import "./App.css";
import { Routes, Route } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import SideBar from "./components/layout/sidebar";
function App() {
  return (
    <div className="flex h-screen bg-[#15202b]   text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15202b] via-[#1c2b3a] to-[#15202b] opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <SideBar />

      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settigs" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
