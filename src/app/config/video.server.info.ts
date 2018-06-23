/**
 * Created by Administrator on 2018/6/19.
 */
export const VideoServerKey = {
    QUERY_BY_FILTER: 'queryByFilter'
};
export const VideoServerInfo = {
    host: 'localhost:8081',
    protocol: 'http',
    interfaces: [
        {
            name: 'queryByFilter',
            type: 'post',
            url: '/movie/movie/query'
        }
    ]
};
