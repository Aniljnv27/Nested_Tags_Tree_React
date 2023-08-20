import React from 'react';

const AddChildButton = ({ parent }) => {
  const addChild = () => {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({ name: 'New Child', data: 'Data' });
  };

  return <button onClick={addChild}>Add Child</button>;
};

export default AddChildButton;
