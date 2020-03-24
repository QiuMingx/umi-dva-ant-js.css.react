import React, { useState } from 'react';
import item from '@/pages/item';

function MultiselectCheckbox({ options, onChange }) {
  const [data, setData] = useState(options);
  const toggle = e => {
    data.forEach((element, key) => {
      if (data[key].label === e.label) data[key].checked = !e.checked;
    });
    setData([...data]);
    onChange(data);
  };
  return (
    <ul style={styles.listContainer}>
      {data.map(item => {
        return (
          <li
            key={item.label}
            style={styles.itemStyle}
            onClick={() => toggle(item)}
          >
            <input readOnly type="checkbox" checked={item.checked || false} />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
const styles = {
  listContainer: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  itemStyle: {
    cursor: 'pointer',
    padding: 5,
  },
};
export default MultiselectCheckbox;
