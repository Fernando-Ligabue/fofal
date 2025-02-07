import { useState } from 'react';
import PropTypes from 'prop-types';

const ColorSelector = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState('black');


  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <button
        className={`w-5 h-5 rounded-full border-2 bg-black ${selectedColor === 'black' ? 'border-zinc-600' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('black')}
      />
      <button
        className={`w-5 h-5 rounded-full border-2 bg-blue-600 ${selectedColor === 'blue' ? 'border-blue-600 shadow-md' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('blue')}
      />
      <button
        className={`w-5 h-5 rounded-full border-2 bg-red-600 ${selectedColor === 'red' ? 'border-red-600' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('red')}
      />
      <button
        className={`w-5 h-5 rounded-full border-2 bg-green-600 ${selectedColor === 'green' ? 'border-green-600' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('green')}
      />
    </div>
  );
};

ColorSelector.propTypes = {
  onColorSelect: PropTypes.func.isRequired
}

export default ColorSelector;