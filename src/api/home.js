import {get} from './index';

//请求轮播图
export function getSlider(url) {
    return get(url)
}

export function getLesson(category,offset,limit) {
    return get(`/getLessons/all?offset=${offset}&limit=${limit}`)
}