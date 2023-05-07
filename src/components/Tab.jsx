import React from 'react';
import { useState } from 'react';

const Tab = (props) => {
  // console.log(props);
  const [selectedTab, setSelectedTab] = useState(props.tabs[0]);
  
  return (
    <div>
      <div>
        {
          props.tabs.map((eachTab, idx) => {
            return (
              <button 
              key={idx} 
              // event when clicked, sets the useState to itself(selection)
              onClick={() => {
                setSelectedTab(eachTab)}}
              >
                {eachTab.name}
              </button>
            )
          })
        }
      </div>
      <div>
        <p>
          {selectedTab.content}
        </p>
      </div>
    </div>
  )
}

export default Tab
