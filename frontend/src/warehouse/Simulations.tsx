"use client";

export default function Simulations() {
  const simulations = [
    {
      id: 1,
      simulationName: "Peak Season Planning",
      scenario: "30% Order Increase",
      expectedOutcome: "Maintain SLA",
      impactScore: "92%",
    },
    {
      id: 2,
      simulationName: "Labor Reduction",
      scenario: "10% Workforce Reduction",
      expectedOutcome: "Delay Increase",
      impactScore: "68%",
    },
    {
      id: 3,
      simulationName: "Storage Optimization",
      scenario: "New Rack Layout",
      expectedOutcome: "Improve Space Usage",
      impactScore: "88%",
    },
    {
      id: 4,
      simulationName: "Automation Upgrade",
      scenario: "Add Picking Robots",
      expectedOutcome: "Faster Fulfillment",
      impactScore: "95%",
    },
    {
      id: 5,
      simulationName: "Delivery Route Change",
      scenario: "Alternative Logistics Route",
      expectedOutcome: "Reduce Delivery Time",
      impactScore: "86%",
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
        <h2 className="page-title">Simulations</h2>
        <button className="btn-primary">Run Simulation</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Simulation Name</th>
              <th>Scenario</th>
              <th>Expected Outcome</th>
              <th>Impact Score</th>
            </tr>
          </thead>

          <tbody>
            {simulations.map((simulation) => (
              <tr key={simulation.id}>
                <td>{simulation.id}</td>
                <td>{simulation.simulationName}</td>
                <td>{simulation.scenario}</td>
                <td>{simulation.expectedOutcome}</td>
                <td>{simulation.impactScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
