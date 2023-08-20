import React, { useState } from 'react';

const TagView = ({ node, setTree, handleAddChild, showChildren, setShowChildren }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [editedName, setEditedName] = useState(node.name);
  const [editingData, setEditingData] = useState(false);
  const [editedData, setEditedData] = useState(node.data);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleEditName = () => {
    setEditingName(true);
  };

  const handleNameInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNameInputBlur = () => {
    setEditingName(false);
    node.name = editedName;
    setTree({ ...node });
  };

 
  const handleDataInputChange = (e) => {
    setEditedData(e.target.value);
  };

  const handleDataInputBlur = () => {
    setEditingData(false);
    node.data = editedData;
    setTree({ ...node });
  };

  const handleAddChildClick = () => {
    handleAddChild(node);
    setShowChildren(true);
  };

  return (
    <div className="TagView">
      <div className="TagHeader">
        <button onClick={handleToggleCollapse}>{collapsed ? '>' : 'v'}</button>
        {editingName ? (
          <input
            type="text"
            value={editedName}
            onChange={handleNameInputChange}
            onBlur={handleNameInputBlur}
            autoFocus
          />
        ) : (
          <span onClick={handleEditName} className="TagName">
            {node.name}
          </span>
        )}
        <button onClick={handleAddChildClick} className="AddChildButton">
          Add Child
        </button>
      </div>
      {!collapsed && showChildren && (
        <div className="TagContent">
          {editingData ? (
            <input
              type="text"
              value={editedData}
              onChange={handleDataInputChange}
              onBlur={handleDataInputBlur}
              autoFocus
            />
          ) : (
            node.data && (
              <input
                type="text"
                value={node.data}
                onChange={handleDataInputChange}
                onClick={() => setEditingData(true)}
              />
            )
          )}
          {node.children && (
            <div className="TagChildren">
              {node.children.map((child, index) => (
                <TagView
                  key={index}
                  node={child}
                  setTree={setTree}
                  handleAddChild={handleAddChild}
                  showChildren={showChildren}
                  setShowChildren={setShowChildren}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TagView;
