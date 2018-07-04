/**
 * Created by Administrator on 2018/6/19.
 */
export const VideoServerKey = {
    QUERY_BY_FILTER: 'queryByFilter',
    QUERY_TYPES: 'queryTypes',
    QUERY_REGIONS: 'queryRegions',
    MOVIE_DETAIL: 'movieDetail',
    SUB_IMAGES: 'subImages'

};
export const VideoServerInfo = {
    host: 'localhost:8081',
    protocol: 'http',
    interfaces: [
        {
            name: 'queryByFilter',
            type: 'post',
            url: '/movie/movie/query'
        },
        {
            name: 'queryTypes',
            type: 'post',
            url: '/movie/movie/types'
        },
        {
            name: 'queryRegions',
            type: 'post',
            url: '/movie/movie/regions'
        },
        {
            name: 'movieDetail',
            type: 'post',
            url: '/movie/movie/detail'
        },
        {
            name: 'subImages',
            type: 'post',
            url: '/movie/movie/subImages'
        },
        {
            name: 'urlHistory',
            type: 'post',
            url: '/movie/collect/urlHistory'
        }
    ]
};
