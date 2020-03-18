import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { fl, databar1, databar2, databar3, databar4 } from './index.less';

import { connect } from 'dva';
import { Layout, Card } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Herodetail({ match, herodetail, dispatch }, props) {
  const { heros = {} } = herodetail;
  console.log(props, match, heros);

  return (
    <div>
      {/* <h1 className={styles.title}>{JSON.stringify(herodetail.heros)}</h1>
      <h1 className={styles.title}>111</h1> */}
      <div
        style={{
          position: 'relative',
          background: `url('//game.gtimg.cn/images/yxzj/img201606/skin/hero-info/${heros.ename}/${heros.ename}-bigskin-1.jpg') center 0`,
        }}
      >
        <div className={styles.con1pic}>
          <div className={styles.picShowBox}>
            <div className={styles.cover}>
              <div className={styles.coverBg}></div>
              <h3 className={styles.coverTitle}>{heros.title}</h3>
              <h2 className={styles.covername}>{heros.cname}</h2>
              <span className={styles.herodetailsort}>
                <i className={styles.herodetailsort2}></i>
              </span>
              <a
                href="//pvp.qq.com/v/detail.shtml?G_Biz=18&amp;tid=556662"
                target="_blank"
                className={styles.herovideo}
              >
                <span></span>
                <img
                  src={`//game.gtimg.cn/images/yxzj/img201606/heroimg/${heros.ename}/${heros.ename}-mobileskin-1.jpg`}
                />
                <i className={styles.icon}></i>
              </a>
              <ul className={styles.coverlist}>
                <li>
                  <em className={`${styles.coverlisttext} ${fl}`}>生存能力</em>
                  <span className={`${styles.coverlistbar} ${fl}  ${databar1}`}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style={{ width: '10%' }}></i>
                  </span>
                </li>
                <li>
                  <em className={`${styles.coverlisttext} ${fl}`}>攻击伤害</em>
                  <span className={`${styles.coverlistbar} ${fl}  ${databar2}`}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style={{ width: '40%' }}></i>
                  </span>
                </li>
                <li>
                  <em className={`${styles.coverlisttext} ${fl}`}>技能效果</em>
                  <span className={`${styles.coverlistbar} ${fl}  ${databar3}`}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style={{ width: '50%' }}></i>
                  </span>
                </li>
                <li>
                  <em className={`${styles.coverlisttext} ${fl}`}>上手难度</em>
                  <span className={`${styles.coverlistbar} ${fl}  ${databar4}`}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style={{ width: '60%' }}></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={styles.zkcon1 zkcon}
        
      >
        <div className={styles.con1pic}>
          <div className={styles.picshowbox}>
            <div className={styles.cover}>
              <div className={styles.coverbg}></div>
              <h3 className={styles.covertitle}>幻纱之灵</h3>
              <h2 className={styles.covername}>西施</h2>
              <span className={styles.herodetailsort}>
                <i className={styles.herodetailsort2}></i>
              </span>
              <a
                href=}//pvp.qq.com/v/detail.shtml?G_Biz=18&amp;tid=556662}
                target=}_blank}
                className={styles.herovideo}
                onclick=}PTTSendClick('btn','video','英雄视频');}
              >
                <span></span>
                <img
                  src=}//game.gtimg.cn/images/yxzj/img201606/heroimg/523/523mobileskin1.jpg}
                  alt=}}
                />
                <i className={styles.icon icoplay}></i>
              </a>
              <ul className={styles.coverlist}>
                <li>
                  <em className={styles.coverlisttext fl}>生存能力</em>
                  <span className={styles.coverlistbar databar1 fl}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style=}width:10%}></i>
                  </span>
                </li>
                <li>
                  <em className={styles.coverlisttext fl}>攻击伤害</em>
                  <span className={styles.coverlistbar databar2 fl}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style=}width:10%}></i>
                  </span>
                </li>
                <li>
                  <em className={styles.coverlisttext fl}>技能效果</em>
                  <span className={styles.coverlistbar databar3 fl}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style=}width:60%}></i>
                  </span>
                </li>
                <li>
                  <em className={styles.coverlisttext fl}>上手难度</em>
                  <span className={styles.coverlistbar databar4 fl}>
                    <b className={styles.icon}></b>
                    <i className={styles.ibar} style=}width:60%}></i>
                  </span>
                </li>
              </ul>
              <div className={styles.coverbtn}>
                <a href=}javascript:;} className={styles.story}>
                  英雄故事
                </a>
                <a href=}javascript:;} className={styles.history} style=}display: none;}>
                  历史上的ta
                </a>
              </div>
            </div>
            <div className={styles.picpf}>
              <a href=}javascript:;} className={styles.pf} title=}更多}>
                皮<br />肤
              </a>
              <ul
                className={styles.picpflist picpflist3}
                dataimgname=}幻纱之灵&amp;0|归虚梦演&amp;0}
              >
                <li>
                  <i className={styles.curr}>
                    <img
                      src=}//game.gtimg.cn/images/yxzj/img201606/heroimg/523/523smallskin1.jpg}
                      alt=}}
                      dataimgname=}//game.gtimg.cn/images/yxzj/img201606/skin/heroinfo/523/523bigskin1.jpg}
                      datatitle=}幻纱之灵}
                      dataicon=}0}
                    />
                  </i>
                  <p>幻纱之灵</p>
                </li>
                <li>
                  <i>
                    <img
                      src=}//game.gtimg.cn/images/yxzj/img201606/heroimg/523/523smallskin2.jpg}
                      alt=}}
                      dataimgname=}//game.gtimg.cn/images/yxzj/img201606/skin/heroinfo/523/523bigskin2.jpg}
                      datatitle=}归虚梦演}
                      dataicon=}0}
                    />
                  </i>
                  <p>归虚梦演</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default connect(({ herodetail }) => ({ herodetail }))(Herodetail);
