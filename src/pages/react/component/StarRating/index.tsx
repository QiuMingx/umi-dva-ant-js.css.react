import React, { useState } from 'react';
import { StarFilled, HeartOutlined } from '@ant-design/icons';

function Star({ fontSize, marked, starId, character = <StarFilled /> }) {
  return (
    <div
      star-id={starId}
      style={{
        color: marked ? '#ff9933' : '#555',
        cursor: 'pointer',
        fontSize: fontSize,
      }}
      role="button"
    >
      {character}
    </div>
  );
}
// function Star({ marked, starId }) {
//   return (
//     <span star-id={starId} style={{ color: '#ff9933' }} role="button">
//       {marked ? '\u2605' : '\u2606'}
//     </span>
//   );
// }
export default function StarRating(props) {
  const [rating, setRating] = React.useState(
    typeof props.rating == 'number' ? props.rating : 0,
  );
  const [selection, setSelection] = React.useState(0);
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute('star-id'))
      val = event.target.getAttribute('star-id');
    setSelection(val);
  };
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row' }}
      onMouseOut={() => hoverOver(null)}
      onClick={event =>
        setRating(event.target.getAttribute('star-id') || rating)
      }
      onMouseOver={hoverOver}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          fontSize={20}
          starId={i + 1}
          key={`star_${i + 1} `}
          character={<StarFilled />}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}
