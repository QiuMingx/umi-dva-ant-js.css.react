export default {
    namespace: 'item', // 默认与文件名相同 // 这个 model 的名字，必须全局唯一
    state:{
        text:'这是一个文件',
        item:'齐天大圣'
    } ,
    subscriptions: { // 用于订阅数据
      setup({ dispatch, history }) {
      },
    },
    reducers: { // 用于修改数据
      update(state) {
        return `${state}_hero`;
      },
    },
    effects: { // 用于获取数据
      *fetch({ type, payload }, { put, call, select }) {
      },
    },
  } 
//   {
//     namespace: 'example', // 这个 model 的名字，必须全局唯一
//     state: {
//       count: 0,
//     }, // 初始数据
//     reducers: {
//       save() { ... },
//     }, // 用于修改数据
//     effects: {
//       *getData() { ... },
//     }, // 用于获取数据
//     subscriptions: {
//       setup() { ... },
//     }, // 用于订阅数据
//   }