import React from 'react';

interface IProgressbar {
  className?: string;
  value: number | string;
  max?: number;
}

const Progressbar = ({ className, value, max = 100 }: IProgressbar) => {
  const percentage = Math.min(Math.max(Number(value), 0), max);

  return (
    <div className={`progressbar `}>
      <div
        className={`progress ${className}`}
        style={{ width: `${(percentage / max) * 100}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
