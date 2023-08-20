import React, { useState } from 'react';

const ExportButton = ({ tree }) => {
  const [exportedData, setExportedData] = useState(null);

  const handleExport = () => {
    const exportedTree = JSON.stringify(tree, ['name', 'children', 'data'], 2);
    setExportedData(exportedTree);
  };

  return (
    <div className="ExportButton">
      <button onClick={handleExport}>Export</button>
      {exportedData && (
        <div className="ExportedData">
          <pre>{exportedData}</pre>
        </div>
      )}
    </div>
  );
};

export default ExportButton;
