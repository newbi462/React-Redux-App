import React from 'react';

export const Map = (props) => {
  return (
    <>
    {props.pricePair.map(item => (
      <div className="pairbox">
				<span>{item.symKey}</span>
        <span>{item.priceKey}</span>
      </div>
		))}
    </>
  );
};
