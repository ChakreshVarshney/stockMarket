import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const StockDataChart = () => {

    const stockData = useSelector((state) => state.stockData) || [];

    // Extracting company names, latest prices, and highest prices from Redux stockData
    const companyNames = stockData.map(item => item.companyName);
    const latestPrices = stockData.map(item => item.latestPrice);
    const highestPrices = stockData.map(item => item.high);

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    // Chart data
    const chartData = {
        labels: companyNames,
        datasets: [
            {
                label: 'Latest Prices',
                data: latestPrices,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Highest Prices',
                data: highestPrices,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Chart options
    const options = {
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Company Prices',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Company Name',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Price in $',
                },
            },
        },
    };


    return (
        <div>
            <div style={{ backgroundColor: '#1890ff', padding: '20px 0', textAlign: 'center', marginBottom: '20px' }}>
                <h2 style={{ color: 'white' }}>Bar Chart : Company Prices</h2>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', margin: '20px' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

export default StockDataChart;

