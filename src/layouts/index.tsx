import React from 'react';
import styles from './index.less';
import { NavLink } from 'umi';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;
const menuData = [
  { route: '/javascript', name: 'JavaScript' },
  { route: '/css', name: 'CSS' },
  { route: '/react', name: 'REACT' },
];
function BasicLayout(props) {
  const {
    location: { pathname }, //获取url地址，定位菜单激活key
    children,
  } = props;
  return (
    <Layout>
      <Header>
        <div>
          <NavLink to="/" className={styles.logo}>
            JavaScript资料库
          </NavLink>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={menu.route}>
              <NavLink to={menu.route}>{menu.name}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content>
        <div className={styles.content} style={{ padding: 24, minHeight: 500 }}>
          {children}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>by Qilz</Footer> */}
    </Layout>
  );
}

export default BasicLayout;
