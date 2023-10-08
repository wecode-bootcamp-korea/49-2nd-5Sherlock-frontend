import React, { useState } from 'react';
import './CheckBox.scss';

function CheckBox({ checked, label, children, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
      {children}
    </div>
  );
}

export default CheckBox;
