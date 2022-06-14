import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ result }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Prediction Bar Chart',
        color: 'green',
        font: {
          size: 22,
        },
      },
    },
  };
  const labels = [
    'Disco',
    'Metal',
    'Reggae',
    'Blues',
    'Rock',
    'Classical',
    'Jazz',
    'Hiphop',
    'Country',
    'Pop',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Percent',
        data: Object.keys(result).map((res) => result[res] * 10),
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgb(84, 183, 255, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)',
          'rgb(60, 179, 113, 0.4)',
          'rgb(255, 99, 71, 0.4)',
          'rgba(0, 93, 71, 0.4)',
          'rgb(118, 99, 71, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgb(84, 183, 255, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgb(60, 179, 113, 1)',
          'rgb(255, 99, 71, 1)',
          'rgba(0, 93, 71, 1)',
          'rgb(118, 99, 71, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div
      style={{
        backgroundColor: 'rgb(255, 255, 255, 0.7)',
        marginTop: '20px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Bar options={options} data={data} />;
    </div>
  );
};
