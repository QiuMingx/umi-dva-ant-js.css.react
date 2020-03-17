import { querySummoner } from 'services/api';
export default {
  namespace: 'summoner', // 默认与文件名相同 // 这个 model 的名字，必须全局唯一
  state: {
    summoner: [],
  },
  subscriptions: {
    // 用于订阅数据
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname == '/summoner') {
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
      const summonerList = yield call(querySummoner);
      console.log(summonerList);
      yield put({
        type: 'save',
        payload: {
          summoner: summonerList,
        },
      });
    },
  },
};
