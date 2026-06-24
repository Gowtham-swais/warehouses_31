"use client";

export default function DataSources() {
  const dataSources = [
    {
      id: 1,
      sourceName: "Warehouse Management System",
      sourceType: "Database",
      description: "Inventory and order data",
      refreshFrequency: "Real-Time",
      status: "Active",
    },
    {
      id: 2,
      sourceName: "IoT Sensors",
      sourceType: "Sensor",
      description: "Temperature and humidity tracking",
      refreshFrequency: "5 Minutes",
      status: "Active",
    },
    {
      id: 3,
      sourceName: "ERP System",
      sourceType: "Application",
      description: "Supply chain transactions",
      refreshFrequency: "Hourly",
      status: "Active",
    },
    {
      id: 4,
      sourceName: "Barcode Scanners",
      sourceType: "Device",
      description: "Item movement tracking",
      refreshFrequency: "Real-Time",
      status: "Active",
    },
    {
      id: 5,
      sourceName: "Fleet Tracking",
      sourceType: "GPS",
      description: "Delivery vehicle monitoring",
      refreshFrequency: "15 Minutes",
      status: "Monitoring",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2 className="page-title">Data Sources</h2>
        <button className="btn-primary">+ Add Source</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Source Name</th>
              <th>Source Type</th>
              <th>Description</th>
              <th>Refresh Frequency</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {dataSources.map((source) => (
              <tr key={source.id}>
                <td>{source.id}</td>
                <td>{source.sourceName}</td>
                <td>{source.sourceType}</td>
                <td>{source.description}</td>
                <td>{source.refreshFrequency}</td>
                <td>
                  <span className="badge-success">
                    {source.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
