import React, { useState } from 'react';
import './App.css';
import TreeView from './TreeView';
import ExportButton from './ExportButton';

function App() {
  const [tree, setTree] = useState({
    name: 'root',
    children: [
      
      
    ],
  });

  return (
    <div className="App">
      <h1>Nested Tags Tree</h1>
      <TreeView tree={tree} setTree={setTree} />
      <ExportButton tree={tree} />
    </div>
  );
}

export default App;
