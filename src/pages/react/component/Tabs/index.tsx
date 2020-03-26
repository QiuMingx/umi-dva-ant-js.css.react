import React, { useState } from 'react';
import item from '@/pages/item';
require('./index.less');

function TabItem(props) {
  return <div {...props} />;
}

export default function Tabs(props) {
  const [bindIndex, setBindIndex] = useState(props.defaultIndex);

  const changeTab = newIndex => {
    if (typeof props.onTabClick === 'function') props.onTabClick(newIndex);
    setBindIndex(newIndex);
  };
  const items = props.children.filter(item => item.type.name === 'TabItem');

  return (
    <div className="wrapper">
      <div className="tab-menu">
        {items.map(({ props: { index, label } }) => (
          <div
            onClick={() => changeTab(index)}
            className={index === bindIndex ? 'focus' : ''}
          >
            {label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {items.map(({ props }) => (
          <div
            {...props}
            className="tab-content_item"
            key={props.index}
            style={{ display: bindIndex === props.index ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
}

Tabs.TabItem = TabItem;
