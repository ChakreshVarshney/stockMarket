import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'antd'; // Import Table and Button components from Ant Design
import { removeFromFavorites } from '../reduxComponents/favoritesActions'; // Import the action creator
import { Typography } from 'antd';


const { Title, Text } = Typography;

const MyDashboard = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites) || [];
    const stockData = useSelector((state) => state.stockData) || [];

    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        },
        {
            title: 'Stock Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
        },
        {
            title: 'Current Price',
            dataIndex: 'latestPrice',
            key: 'latestPrice',
        },
        {
            title: 'Highest Price',
            dataIndex: 'high',
            key: 'high',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Actions',
            dataIndex: 'symbol',
            key: 'actions',
            render: (symbol) => (
                <Button onClick={() => handleRemoveFromFavorites(symbol)}>
                    Remove from Favorites
                </Button>
            ),
        },
    ];

    const handleRemoveFromFavorites = (symbol) => {
        dispatch(removeFromFavorites(symbol));
    };

    const favoriteStocks = stockData.filter(stock => favorites.includes(stock.symbol));

    return (
        <div>
            <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
                <Title style={{ color: 'white', textAlign: 'center' }}>My Dashboard</Title>
            </div>
            <Table dataSource={favoriteStocks} columns={columns} />
        </div>
    );
};

export default MyDashboard;

