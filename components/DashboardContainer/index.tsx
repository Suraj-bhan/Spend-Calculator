import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import db from '../../Firebase';

interface Item {
  id: string;
  type: string;
  category: string;
  amount: number;
  reason: string;
  date: string;
  time: string;
  receiver: string;
  mediumCategory: string;
  medium: string;
  tax: number;
  sharePercent: number;
  sharedWith: string;
}


interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const DashboardContainer = () => {
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.id === editingKey;

  useEffect(() => {
    db.collection('transactions').onSnapshot((snapshot) =>
      setData(snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      }
      )),
    );
  }, []);

  const edit = (record: Partial<Item> & { id: React.Key }) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const handleUpdate = (id, data) => {
    db.collection('transactions').doc(id).update({
      ...data,
    });
  }

  const save = async (id: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        handleUpdate(id, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.error('Validate Failed:', errInfo);
    }
  };


  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      editable: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      editable: true,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      editable: true,
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
      key: 'reason',
      editable: true,
    },
    {
      title: 'Receiver',
      dataIndex: 'receiver',
      key: 'receiver',
      editable: true,
    },
    {
      title: 'Medium',
      dataIndex: 'mediumCategory',
      render: (_: any, record: Item) => {
        return (
          <span>
            <Typography style={{ marginRight: 8 }}>
              {record.mediumCategory} | {record.medium}
            </Typography>
          </span>
        )
      },
    },
    {
      title: 'Transaction At',
      dataIndex: 'date',
      render: (_: any, record: Item) => {
        return (
          <span>
            <Typography style={{ marginRight: 8 }}>
              {record.date} | {record.time}
            </Typography>
          </span>
        )
      },
    },
    {
      title: 'Shared',
      dataIndex: 'sharePercent',
      render: (_: any, record: Item) => {
        return (
          <span>
            <Typography style={{ marginRight: 8 }}>
              {record.sharedWith} | ({record.sharePercent}%)
            </Typography>
          </span>
        )
      },
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];


  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="m-5">
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </div>
  );
};

export default DashboardContainer;
