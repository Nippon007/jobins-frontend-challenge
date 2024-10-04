import React from 'react';

interface ICard {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICard) => {
  return (
    <div className={`bg-white rounded-xl p-3 md:p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
