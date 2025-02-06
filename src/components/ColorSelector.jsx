import { useState } from 'react';

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <button
        className={`w-5 h-5 rounded-full border-2 bg-blue-600 ${selectedColor === 'blue' ? 'border-blue-600 shadow-md' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('blue')}
      />
      <button
        className={`w-5 h-5 rounded-full border-2 bg-red-600 ${selectedColor === 'red' ? 'border-red-600' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('red')}
      />
      <button
        className={`w-5 h-5 rounded-full border-2 bg-zinc-600 ${selectedColor === 'zinc' ? 'border-zinc-600' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('zinc')}
      />
      <button
        className={`w-5 h-5 rounded-full border-2 bg-green-600 ${selectedColor === 'green' ? 'border-green-600' : 'border-zinc-200'}`}
        onClick={() => handleColorSelect('green')}
      />
    </div>
  );
};

export default ColorSelector;