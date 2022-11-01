import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import db from '../../Firebase';

const DashboardContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection('transactions').onSnapshot((snapshot) =>
      setData(snapshot.docs.map((doc) => doc.data())),
    );
  }, []);

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Receiver',
      dataIndex: 'receiver',
      key: 'receiver',
    },
    {
      title: 'Medium Category',
      dataIndex: 'mediumCategory',
      key: 'mediumCategory',
    },
    {
      title: 'Medium',
      dataIndex: 'medium',
      key: 'medium',
    },
    {
      title: 'Tax',
      dataIndex: 'tax',
      key: 'tax',
    },
    {
      title: 'Share %',
      dataIndex: 'sharePercent',
      key: 'sharePercent',
    },
    {
      title: 'Shared With',
      dataIndex: 'sharedWith',
      key: 'sharedWith',
    },
  ];

  return (
    <div className="m-5">
      {JSON.stringify(data)}
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default DashboardContainer;
