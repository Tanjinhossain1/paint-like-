import React from 'react';

const Menu = ({ setLineColor, setLineWidth, 
    setLineOpacity,download,clear }) => {
    
    return (
        <div className="Menu">
          <label>Brush Color </label>
          <input
            type="color"
            onChange={(e) => {
              setLineColor(e.target.value);
            }}
          />
          <label>Brush Width </label>
          <input
            type="range"
            min="3"
            max="20"
            onChange={(e) => {
              setLineWidth(e.target.value);
            }}
          />
          <label>Brush Opacity</label>
          <input
            type="range"
            min="1"
            max="100"
            onChange={(e) => {
              setLineOpacity(e.target.value / 100);
            }}
          />
           <button className=' bg-white px-1 text-green-500' onClick={download}>Download</button>
           <button className=' bg-white px-1 text-red-500' onClick={clear}>Clear</button>
        </div>
      );
};

export default Menu;