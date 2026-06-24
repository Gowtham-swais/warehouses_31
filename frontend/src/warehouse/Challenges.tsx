"use client";

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      challengeName: "Picking Delay",
      description: "Delay in item picking process",
      businessObjective: "Reduce order processing time",
      targetMetric: "Picking Time < 15 mins",
      status: "Active",
    },
    {
      id: 2,
      challengeName: "Inventory Mismatch",
      description: "Stock mismatch between system and warehouse",
      businessObjective: "Improve inventory accuracy",
      targetMetric: "Accuracy > 95%",
      status: "In Progress",
    },
    {
      id: 3,
      challengeName: "Space Utilization",
      description: "Inefficient warehouse storage usage",
      businessObjective: "Optimize storage capacity",
      targetMetric: "Utilization > 85%",
      status: "Active",
    },
    {
      id: 4,
      challengeName: "Order Fulfillment Delay",
      description: "Late shipment processing",
      businessObjective: "Increase fulfillment rate",
      targetMetric: "Fulfillment > 98%",
      status: "Monitoring",
    },
    {
      id: 5,
      challengeName: "Equipment Downtime",
      description: "Unexpected conveyor breakdowns",
      businessObjective: "Reduce downtime",
      targetMetric: "Downtime < 2%",
      status: "Active",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 className="page-title">Operational Challenges</h2>

        <button className="btn-primary">
          + Add Challenge
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Challenge Name</th>
              <th>Description</th>
              <th>Business Objective</th>
              <th>Target Metric</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {challenges.map((challenge) => (
              <tr key={challenge.id}>
                <td>{challenge.id}</td>
                <td>{challenge.challengeName}</td>
                <td>{challenge.description}</td>
                <td>{challenge.businessObjective}</td>
                <td>{challenge.targetMetric}</td>
                <td>
                  <span
                    className={
                      challenge.status === "Active"
                        ? "badge-success"
                        : challenge.status === "In Progress"
                        ? "badge-warning"
                        : "badge-danger"
                    }
                  >
                    {challenge.status}
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
