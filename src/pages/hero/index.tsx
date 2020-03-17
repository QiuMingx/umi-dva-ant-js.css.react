import React from 'react';
import styles from './index.less';
import { connect } from 'dva'; //---step1 在文件头部引入了dva的connect
import { Row, Col, Radio, Card } from 'antd';

function Hero({ hero, dispatch }) {
  const { heros = [] } = hero;
  //---step2 把之前的匿名函数，改成实名函数Hero
  //---step4 使用connect连接了页面和models
  return (
    <div className={styles.normal}>
      <Row>
        {heros.reverse().map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default connect(({ hero }) => ({ hero }))(Hero); //---step3 使用connect连接了页面和models
