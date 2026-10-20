import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Investors from "./page/investors/Investors";
import Analytics from "./page/analytics/Analytics";
import Invoices from "./page/invoices/Invoices";
import ProductManage from "./page/ProductManage/ProductManage.jsx";
import Finances from "./page/Finances/Finances";
import ChatBot from "./page/ChatBot/ChatBot.jsx";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

import InvestmentReturnReport from "./page/report/InvestmentReturnReport.jsx";
import ProfitMarginTrendReport from "./page/report/ProfitMarginTrendReport.jsx";
import MonthlyLossProfitReport from "./page/report/MonthlyLossProfitReport.jsx";
import PortfolioPerformanceReport from "./page/report/PortfolioPerformanceReport.jsx";
import RevenueGrowthReport from "./page/report/RevenueGrowthReport.jsx";

import Login from "./page/login/login.jsx";
import ForgotPassword from "./page/Forgot Password/Forgot Password.jsx";
import RecentActivities from "./UserMenu/RecentActivities/RecentActivities.jsx";
import HomePage from "./page/Home/HomePage.jsx";  
import Investorsfaq from './page/Home/Investorsfaq.jsx'; 
import Ourteam from './page/Home/Ourteam.jsx'; 
import RaiseMoney from './page/Home/RaiseMoney.jsx'; 



// تحميل سكربت Tidio
const loadTidio = () => {
  const script = document.createElement("script");
  script.src = "//code.tidio.co/1l6f1hwpsfikpjt48mdzflzh394vfe2s.js";
  script.async = true;
  document.body.appendChild(script);
};

// حماية المسارات - مؤقتًا السماح بالدخول دايمًا
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // السماح دائمًا (بدون توكن مؤقتًا)
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Investorsfaq" element={<Investorsfaq />} />
      <Route path="/Ourteam" element={<Ourteam />} />
      <Route path="/RaiseMoney" element={<RaiseMoney />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="investors" element={<Investors />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="ProductManage" element={<ProductManage />} />
        <Route path="Finances" element={<Finances />} />
        <Route path="ChatBot" element={<ChatBot />} />

        {/* تقارير */}
        <Route path="report/investment/return" element={<InvestmentReturnReport />} />
        <Route path="report/profit/margin/trend" element={<ProfitMarginTrendReport />} />
        <Route path="report/monthly/loss/profit" element={<MonthlyLossProfitReport />} />
        <Route path="report/portfolio/performance" element={<PortfolioPerformanceReport />} />
        <Route path="report/Revenue/Growth" element={<RevenueGrowthReport />} />

        {/* User Menu Routes */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="recent-activities" element={<RecentActivities />} />
        <Route path="logout" element={<Navigate to="/login" />} />
      </Route>

      {/* Fallback Route */}
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </>
  )
);

function AppWithTidio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTidio();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20%", fontSize: "20px" }}>
        Loading...
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithTidio />
  </React.StrictMode>
);
