import { queryHeroList, getHeroDetails, getFreeHeros } from 'services/api';

export default {
  namespace: 'herodetail', // 默认与文件名相同 // 这个 model 的名字，必须全局唯一
  state: {
    heros: {},
  },
  subscriptions: {
    // 用于订阅数据 全局的监听
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log(pathname, query);
        if (pathname === '/herodetail') {
          console.log(query);
          dispatch({
            type: 'fetch',
            payload: {
              query,
            },
          });
        }
      });
    },
  },
  reducers: {
    // 用于修改数据
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    // 用于获取数据
    *fetch({ type, payload }, { put, call, select }) {
      console.log(payload.query);
      const herodetails = yield call(getHeroDetails, payload.query);
      console.log(herodetails);
      yield put({
        type: 'save',
        payload: {
          heros: herodetails,
        },
      });
    },
  },
};
