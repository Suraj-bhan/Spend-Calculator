import React, { useState } from 'react';
import 'antd/dist/antd.css';
import SelectComponent from '../Select/index';
import moment from 'moment';
import { Button } from 'antd';
import { message } from 'antd';

export default function EditorPanel() {
  const [typeOptions, setTypeOfOptions] = useState<string[]>([
    'Debit',
    'Credit',
  ]);
  const [type, setType] = useState('Debit');

  const [mediumOptions, setMediumOptions] = useState<string[]>([
    'PhonePay',
    'G-Pay',
    'PayTm',
    'FiPay',
    'SlicePay',
    'Slice',
    'Fi',
    'Sbi',
    'Atm',
    'Purse',
    'Wazirx',
    'Binance',
    'Groww',
  ]);
  const [medium, setMedium] = useState('PayTm');

  const [mediumCategoryOptions, setMediumCategoryOptions] = useState<string[]>([
    'Card',
    'UPI',
    'Cash',
  ]);
  const [mediumCategory, setMediumCategory] = useState('UPI');

  const [categoryOptions, setCategoryOptions] = useState<string[]>([
    'Grocery',
    'Food',
    'HouseHold',
    'Fashion',
    'Entertainment',
    'Travel',
    'Gifts',
    'Family',
    'Investment',
    'Borrow',
    'Land',
  ]);
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment().format('HH:mm'));
  const [reason, setReason] = useState('');
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState('');
  const [tax, setTax] = useState(0);
  const [sharedWith, setSharedWith] = useState('');
  const [sharePercent, setSharePercent] = useState(0);

  const handleTypeChange = (value: string) => {
    setType(value);
  };

  const handleMediumChange = (value: string) => {
    setMedium(value);
  };

  const handleMediumCategoryChange = (value: string) => {
    setMediumCategory(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };

  const handleTaxChange = (e) => {
    setTax(e.target.value);
  };

  const handleSharedWithChange = (e) => {
    setSharedWith(e.target.value);
  };

  const handleSharePercentChange = (e) => {
    setSharePercent(e.target.value);
  };

  const info = (text) => {
    message.error(text);
  };

  const handleSubmit = () => {
    const data = {
      type,
      category,
      reason,
      amount,
      mediumCategory,
      medium,
      date,
      time,
      receiver,
      tax,
      sharePercent,
      sharedWith,
    };
    if (reason === '') {
      info('Reason Can not be empty.');
    } else if (amount === 0) {
      info('Amount can not be zero.');
    } else if (receiver === '') {
      info('Receiver Can not be empty.');
    } else if (sharedWith !== '' && sharePercent === 0) {
      info('Shared Percent Can not be zero.');
    } else console.log(data);
  };

  return (
    <div className="shadow-md bg-white w-full mx-4 my-4 grid sm:grid-cols-1 md:grid-cols-2 px-4 gap-4 py-4">
      <div className="flex flex-col">
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Type
        </span>
        <SelectComponent
          options={typeOptions}
          onChange={handleTypeChange}
          value={type}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Category
        </span>
        <SelectComponent
          options={categoryOptions}
          onChange={handleCategoryChange}
          value={category}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Reason
        </span>
        <input
          type="text"
          placeholder="Lunch/Grocery"
          value={reason}
          onChange={handleReasonChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Amount
        </span>
        <input
          type="number"
          placeholder="22.5"
          value={amount}
          onChange={handleAmountChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-28 text-center shadow-md -ml-1 border-2">
          Medium Category
        </span>
        <SelectComponent
          options={mediumCategoryOptions}
          onChange={handleMediumCategoryChange}
          value={mediumCategory}
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Medium
        </span>
        <SelectComponent
          options={mediumOptions}
          onChange={handleMediumChange}
          value={medium}
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Date
        </span>
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleDateChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Time
        </span>
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={handleTimeChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Receiver
        </span>
        <input
          type="text"
          placeholder="Zomato/Amit/Akshay"
          value={receiver}
          onChange={handleReceiverChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Tax
        </span>
        <input
          type="number"
          placeholder="Zomato/Amit/Akshay"
          value={tax}
          onChange={handleTaxChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Shared with
        </span>
        <input
          type="text"
          placeholder="Zomato/Amit/Akshay"
          value={sharedWith}
          onChange={handleSharedWithChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex flex-col">
        {' '}
        <span className="text-xs p-0.5 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2">
          Shared %
        </span>
        <input
          type="number"
          placeholder="Zomato/Amit/Akshay"
          value={sharePercent}
          onChange={handleSharePercentChange}
          className="bg-gray-200 rounded-md p-4"
        />
      </div>
      <div className="flex gap-x-4 justify-center md:justify-start mt-4">
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button type="default">Cancel</Button>
      </div>
    </div>
  );
}
