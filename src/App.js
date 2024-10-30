import React, { useEffect } from 'react';
import Tree from './Tree';
import data from './data.json';

function App() {
  useEffect(() => {
    document.title = "Entity Tree"; // Modifica il titolo della pagina web
  }, []);
  
  return (
    <div className="App">
      <Tree data={data} />
    </div>
  );
}

export default App;
