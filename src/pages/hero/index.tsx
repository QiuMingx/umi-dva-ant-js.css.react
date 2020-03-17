import React from 'react';
import styles from './index.less';
import { connect } from 'dva'; //---step1 在文件头部引入了dva的connect
import { Row, Col, Radio, Card } from 'antd';
const RadioGroup = Radio.Group;

const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];
function Hero({ hero, dispatch }) {
  const { heros = [], filterKey = 0 } = hero;
  //---step2 把之前的匿名函数，改成实名函数Hero
  //---step4 使用connect连接了页面和models
  const onChange = e => {
    dispatch({
      type: 'hero/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };
  return (
    <div className={styles.normal}>
      <Card className={styles.radioPanel}>
        <RadioGroup onChange={onChange} value={filterKey}>
          {heroType.map(item => {
            return (
              <Radio
                onChange={onChange}
                value={item.key}
                key={`hero-rodio-${item.key}`}
              >
                {item.value}
              </Radio>
            );
          })}
        </RadioGroup>
      </Card>

      <Row>
        {heros
          .filter(item => filterKey === 0 || item.hero_type === filterKey)
          .reverse()
          .map(item => (
            <Col key={item.ename} span={3} className={styles.heroitem}>
              <img
              // src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
              />
              <p>{item.cname}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
}
export default connect(({ hero }) => ({ hero }))(Hero); //---step3 使用connect连接了页面和models
