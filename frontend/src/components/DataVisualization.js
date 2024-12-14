import React from 'react';
import { Bar } from 'react-chartjs-2';

function DataVisualization({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Impact Metrics',
        data: data.values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default DataVisualization;