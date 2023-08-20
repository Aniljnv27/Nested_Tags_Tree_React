import React, { useState } from 'react';
import TagView from './TagView';

const TreeView = ({ tree, setTree }) => {
  const [showChildren, setShowChildren] = useState(true);

  const handleAddChild = (node, data, path) => {
    const newNode = {
      name: generateUniqueChildName(node),
      data: generateUniqueChildData(node),
    };
    if (!node.children) {
      node.children = [newNode];
    } else {
      node.children.push(newNode);
    }
    setTree({ ...tree });
  };

  const generateUniqueChildName = (node) => {
    let baseName = '';
    if (node.name === 'root') {
      baseName = 'child';
    } else {
      baseName = node.name + '-child';
    }
    let index = 1;

    if (node.children) {
      const existingNames = node.children.map((child) => child.name);

      while (true) {
        const childName = `${baseName}-${index}`;
        if (!existingNames.includes(childName)) {
          return childName;
        }
        index++;
      }
    } else {
      baseName = baseName + '-1';
      return baseName;
    }
  };

  const generateUniqueChildData = (node) => {
    let baseData = node.name + '-data';
    let index = 1;

    if (node.children) {
      const existingDatas = node.children.map((child) => child.data);

      while (true) {
        const childData = `${baseData}-${index}`;
        if (!existingDatas.includes(childData)) {
          return childData;
        }
        index++;
      }
    } else {
      return baseData; 
    }
  };

  return (
    <div className="TreeView">
      <TagView
        node={tree}
        setTree={setTree}
        handleAddChild={handleAddChild}
        showChildren={showChildren}
        setShowChildren={setShowChildren}
        path={[]}
      />
    </div>
  );
};

export default TreeView;
