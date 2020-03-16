import React from 'react';
import styles from './index.less';
import { connect } from 'dva'; //---step1 在文件头部引入了dva的connect

function Summoner(props) {
  //---step2 把之前的匿名函数，改成实名函数Hero
  console.log(props.summoner); //---step4 使用connect连接了页面和models
  return (
    <div className={styles.normal}>
      <h1>Page summoner</h1>
      <h2>This is {JSON.stringify(props.summoner)}</h2>
    </div>
  );
}
export default connect(({ summoner }) => ({ summoner }))(Summoner); //--- step3 从属性中取出namespace为hero的model的state数据。
