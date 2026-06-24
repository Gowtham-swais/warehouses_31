"use client";

export default function KPIMetrics() {
  const kpis = [
    {
      id: 1,
      kpiName: "Inventory Accuracy",
      currentValue: "96%",
      targetValue: "98%",
      trend: "Improving",
    },
    {
      id: 2,
      kpiName: "Order Fulfillment",
      currentValue: "92%",
      targetValue: "95%",
      trend: "Improving",
    },
    {
      id: 3,
      kpiName: "Picking Efficiency",
      currentValue: "88%",
      targetValue: "90%",
      trend: "Stable",
    },
    {
      id: 4,
      kpiName: "Space Utilization",
      currentValue: "74%",
      targetValue: "80%",
      trend: "Improving",
    },
    {
      id: 5,
      kpiName: "Delay Risk",
      currentValue: "12%",
      targetValue: "<10%",
      trend: "Needs Attention",
    },
  ];

  return (
    <div>
      <h2 className="page-title">KPI Metrics</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>KPI Name</th>
              <th>Current Value</th>
              <th>Target Value</th>
              <th>Trend</th>
            </tr>
          </thead>

          <tbody>
            {kpis.map((kpi) => (
              <tr key={kpi.id}>
                <td>{kpi.id}</td>
                <td>{kpi.kpiName}</td>
                <td>{kpi.currentValue}</td>
                <td>{kpi.targetValue}</td>
                <td>{kpi.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
