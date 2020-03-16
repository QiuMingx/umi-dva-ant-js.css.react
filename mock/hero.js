import herolist from './herolist.json';

export default {
  // '/api/herolist.json': [
  //     {
  //       ename: 106,
  //       cname: '小乔',
  //       title: '恋之微风',
  //       new_type: 0,
  //       hero_type: 2,
  //       skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
  //     },
  //   ],
  'POST /api/herodetails.json': (req, res) => {
    const { ename } = req.body;
    const hero = herolist.filter(item => item.ename === parseInt(ename, 10))[0];
    res.send(hero);
  },
};

// import herolist from './herolist.json';

// export default {
//   '/api/herolist.json': herolist
// };
