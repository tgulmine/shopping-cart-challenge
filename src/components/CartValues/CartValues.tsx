import * as React from 'react';

interface CartValuesProps {
  name: string;
  value: number;
  total: boolean;
}

const CartValues: React.FC<CartValuesProps> = props => {
  const { name } = props;
  const { value } = props;
  const { total } = props;

  return (
    <div
      className={
        total
          ? `p-4 bg-orange-300 border-t-1 border-orange-400 flex justify-between 
          text-orange-800 text-base font-bold rounded-b-lg`
          : `p-4 bg-orange-300 border-t-1 border-orange-400 flex justify-between 
          text-orange-800 text-base font-normal'`
      }
    >
      <div>{name}</div>
      <div>$ {value},00</div>
    </div>
  );
};

export default CartValues;
