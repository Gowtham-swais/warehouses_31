"use client";

export default function Predictions() {
  const predictions = [
    {
      id: 1,
      predictionType: "Demand Forecast",
      predictedValue: "12,500 Orders",
      confidence: "96%",
      recommendation: "Increase inventory stock",
    },
    {
      id: 2,
      predictionType: "Delay Risk",
      predictedValue: "14%",
      confidence: "91%",
      recommendation: "Add evening shift workers",
    },
    {
      id: 3,
      predictionType: "Stock Out Risk",
      predictedValue: "SKU-205",
      confidence: "89%",
      recommendation: "Reorder immediately",
    },
    {
      id: 4,
      predictionType: "Equipment Failure",
      predictedValue: "Conveyor Belt 2",
      confidence: "93%",
      recommendation: "Schedule maintenance",
    },
    {
      id: 5,
      predictionType: "Warehouse Capacity",
      predictedValue: "84%",
      confidence: "95%",
      recommendation: "Optimize storage zones",
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
        <h2 className="page-title">AI Predictions</h2>
        <button className="btn-primary">Generate Prediction</button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Prediction Type</th>
              <th>Predicted Value</th>
              <th>Confidence Score</th>
              <th>Recommendation</th>
            </tr>
          </thead>

          <tbody>
            {predictions.map((prediction) => (
              <tr key={prediction.id}>
                <td>{prediction.id}</td>
                <td>{prediction.predictionType}</td>
                <td>{prediction.predictedValue}</td>
                <td>{prediction.confidence}</td>
                <td>{prediction.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
