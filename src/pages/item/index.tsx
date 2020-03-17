import React from 'react';
import styles from './index.less';
import { Row, Col } from 'antd';
import { connect } from 'dva'; //---step1 在文件头部引入了dva的connect

function Item({ item, dispath }) {
  const { items = {} } = item;
  //---step2 把之前的匿名函数，改成实名函数Hero
  console.log('props:', items); //---step4 使用connect连接了页面和models
  return (
    <div className={styles.normal}>
      <Row>
        {items.reverse().map(item => {
          return (
            <Col
              key={item.item_id}
              title={item.title}
              span={3}
              className={styles.itemItem}
            >
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`}
              />
              <p>{item.item_name}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default connect(({ item }) => ({ item }))(Item); //--- step3 从属性中取出namespace为hero的model的state数据。
