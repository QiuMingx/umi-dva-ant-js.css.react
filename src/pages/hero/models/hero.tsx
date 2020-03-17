import request from 'utils/request';
import { queryHeroList, getHeroDetails } from 'services/api';

export default {
  namespace: 'hero', // 默认与文件名相同 // 这个 model 的名字，必须全局唯一
  state: {
    heros: [],
    filterKey: 0,
  },
  subscriptions: {
    // 用于订阅数据 全局的监听
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch',
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
      const herolist = yield call(queryHeroList);
      const herodetails = yield call(getHeroDetails, { ename: 110 });
      console.log(herodetails);
      yield put({
        type: 'save',
        payload: {
          heros: herolist,
        },
      });
    },
  },
};
