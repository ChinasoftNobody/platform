/**
 * Created by Administrator on 2018/6/19.
 */
export const VideoServerKey = {
    QUERY_BY_FILTER: 'queryByFilter',
    QUERY_TYPES: 'queryTypes',
    QUERY_REGIONS: 'queryRegions',
    MOVIE_DETAIL: 'movieDetail',
    SUB_IMAGES: 'subImages',
    URL_HISTORY: 'urlHistory',
    COLLECT_CREATE_MODULE: 'createModule',
    COLLECT_MODULE_QUERY: 'queryModule',
    COLLECT_DELETE_MODULE: 'deleteModule',
    MODULE_PLAN_QUERY: 'queryAllPlan',
    COLLECT_CREATE_PLAN: 'createPlan'

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
        },
        {
            name: 'createModule',
            type: 'post',
            url: '/movie/collect/module/create'
        },
        {
            name: 'queryModule',
            type: 'post',
            url: '/movie/collect/module/query'
        },
        {
            name: 'deleteModule',
            type: 'post',
            url: '/movie/collect/module/delete'
        },
        {
            name: 'queryAllPlan',
            type: 'post',
            url: '/movie/collect/module/plan/queryByModuleId'
        },
        {
            name: 'createPlan',
            type: 'post',
            url: '/movie/collect/module/plan/createPlan'
        }
    ]
};
