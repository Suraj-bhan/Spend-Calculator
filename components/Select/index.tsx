import React, { useState, useRef, useEffect } from 'react';
import 'antd/dist/antd.css';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import type { InputRef } from 'antd';

const { Option } = Select;

let index = 0;

interface SelectComponentProps {
  options: string[];
  onChange: (value: string) => void;
  handleItemAdd?: (value: string) => void;
  value: string;
}

const SelectComponent = ({
  options,
  onChange,
  handleItemAdd,
  value,
}: SelectComponentProps) => {
  const [items, setItems] = useState([]);
  const [localValue, setLocalValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    setItems([...options]);
  }, [options]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);
    onChange(event.target.value);
  };

  const handleValueChange = (value) => {
    console.log(value);
    onChange(value);
  };

  const addItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setItems([...items, localValue || `New item ${index++}`]);
    handleItemAdd(localValue);
    setLocalValue('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <Select
      size="large"
      // placeholder="debit/credit"
      value={localValue as any}
      onChange={handleValueChange}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={localValue}
              onChange={onNameChange}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
    >
      {items.map((item) => (
        <Option key={item}>{item}</Option>
      ))}
    </Select>
  );
};

export default SelectComponent;
