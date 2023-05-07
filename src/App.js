import './App.css';
import { useState } from 'react';
import Tab from './components/Tab';

function App() {

  // array of tabs to be used as buttons
  const tabs =[
    { name: "Tab 1",
      content: "Tab 1 content is showing here"
    },
    { name: "Tab 2",
      content: "Tab 2 content is showing here"
    },
    { name: "Tab 3",
      content: "Tab 3 content is showing here"
    }
  ];

  return (
    <div className="App">
      <Tab tabs = {tabs}/>
    </div>
  );
}

export default App;

