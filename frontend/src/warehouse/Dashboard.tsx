"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

type DashboardProps = {
  setActivePage: (page: string) => void;
};

const kpiData = [
  { name: "Inventory Accuracy", value: 96, page: "dataSources", color: "#2563eb" },
  { name: "Fulfillment Rate", value: 92, page: "simulations", color: "#16a34a" },
  { name: "Picking Efficiency", value: 88, page: "predictions", color: "#f59e0b" },
  { name: "Space Utilization", value: 74, page: "kpi", color: "#7c3aed" },
  { name: "Delay Risk", value: 12, page: "challenges", color: "#dc2626" },
];

export default function Dashboard({ setActivePage }: DashboardProps) {
  return (
    <div className="dashboard-container">
      <h1>Digital Twin Simulation Dashboard</h1>

      <div className="kpi-grid">
        {kpiData.map((item) => (
          <div
            key={item.name}
            className="kpi-card clickable"
            onClick={() => setActivePage(item.page)}
          >
            <h3>{item.name}</h3>
            <p>{item.value}%</p>
          </div>
        ))}
      </div>

      <div className="chart-card">
        <h2>Warehouse KPI Bar Chart</h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={kpiData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value">
              {kpiData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="performance-card">
        <h2>Warehouse Performance Progress</h2>

        {kpiData.map((item) => (
          <div className="progress-row" key={item.name}>
            <div className="progress-label">
              <span>{item.name}</span>
              <strong>{item.value}%</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: `${item.value}%`,
                  background: item.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}