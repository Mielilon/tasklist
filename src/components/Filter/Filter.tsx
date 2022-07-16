import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Filter.sass';

const dropdownData = {
  defaultValue: {
    name: 'Default',
    icon: {
      type: 'flag',
      color: 'green',
    },
  },
  dropdownItems: [
    {
      name: 'Status',
      icon: {
        type: 'flag',
        color: 'green',
      },
    },
    {
      name: 'Tags',
      icon: {
        type: 'flag',
        color: 'green',
      },
    },
    {
      name: 'Due date',
      icon: {
        type: 'flag',
        color: 'blue',
      },
    },
    {
      name: 'Priority',
      icon: {
        type: 'flag',
        color: 'red',
      },
    },
    {
      name: 'Assignee',
    },
  ],
};
function Filter(): React.ReactElement {
  const [form, setForm] = useState({ filter: 'Select filter', operator: 'is', option: 'Select option' });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div className="filter">
      <Dropdown
        value={form.filter}
        name="filter"
        onChange={handleInputChange}
        data={dropdownData}
        type="default"
      />
      <Dropdown
        value={form.operator}
        name="operator"
        onChange={handleInputChange}
        data={dropdownData}
        type="default"
      />
      <Dropdown
        value={form.option}
        name="option"
        onChange={handleInputChange}
        data={dropdownData}
        type="default"
      />
    </div>
  );
}

export default Filter;
