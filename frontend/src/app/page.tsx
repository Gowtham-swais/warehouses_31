"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/warehouse/Dashboard";
import Challenges from "@/warehouse/Challenges";
import DataSources from "@/warehouse/DataSources";
import Predictions from "@/warehouse/Predictions";
import Simulations from "@/warehouse/Simulations";
import KPIMetrics from "@/warehouse/KPIMetrics";

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard setActivePage={setActivePage} />;

      case "challenges":
        return <Challenges />;

      case "dataSources":
        return <DataSources />;

      case "predictions":
        return <Predictions />;

      case "simulations":
        return <Simulations />;

      case "kpi":
        return <KPIMetrics />;

      default:
        return <Dashboard setActivePage={setActivePage} />;
    }
  };

  // Landing Screen
  if (showLanding) {
    return (
      <div className="landing-page">
        <img
          src="/warehouse-banner.jpg"
          alt="Warehouse Digital Twin"
          className="landing-image"
        />

        <button
          className="continue-button"
          onClick={() => setShowLanding(false)}
        >
          CONTINUE
        </button>
      </div>
    );
  }

  // Main Application
  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <main className="main-content">
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        {renderPage()}
      </main>
    </div>
  );
}