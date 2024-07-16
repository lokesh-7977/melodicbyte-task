"use client"
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BookingChart = () => {
  const data = {
    labels: ['10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm'],
    datasets: [
      {
        label: 'Bookings',
        data: [60, 40, 70, 50, 80, 30, 60, 40, 70, 90],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#8b5cf6',
        fill: true,
        tension: 0.4,
        pointRadius: (ctx : any) => (ctx.raw > 50 ? 5 : 0),  
        pointHoverRadius: (ctx : any) => (ctx.raw > 50 ? 7 : 0), 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `Total Bookings: ${context.raw}`;
          },
        },
        backgroundColor: '#3b82f6',
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 12,
        },
        displayColors: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value: any) {
            return value;
          },
        },
        grid: {
          display: true,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxRotation: 0,
        },
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Line data={data} options={options} />
    </div>

  );
};

export default BookingChart;
