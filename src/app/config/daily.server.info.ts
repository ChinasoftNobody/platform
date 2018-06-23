/**
 * Created by Administrator on 2018/6/19.
 */
export const ServerInfo = {
  host: 'localhost:8080',
  protocol: 'http',
  interfaces: [
    {
      name: 'calendar',
      type: 'post',
      url: '/daily/schedule/calendar'
    }, {
      name: 'schedule_list',
      type: 'post',
      url: '/daily/schedule/query'
    }, {
      name: 'login',
      type: 'post',
      url: '/daily/user/login'
    }
  ]
};
