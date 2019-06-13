import * as Types from '../action-type';
import {getSlider,getLesson} from "../../api/home";

export default {
    change(t){
        return {type:Types.CHANGE_TYPE,t}
    },
    getSlider(){
        return function (dispatch,getState) {
            getSlider('/getSliders').then(function (data) {
                dispatch({
                    type:Types.SET_SLIDERS,
                    payload:data
                })
            });
        }
    },
    getLesson(){
        return function (dispatch,getState) {
            let store = getState().home;
            let category = store.type;
            let offset = store.lesson.offset;
            let limit = store.lesson.limit;
            let hasMore = store.lesson.hasMore;
            if (hasMore) {
                getLesson(category,offset,limit).then(function (data) {
                    dispatch({
                        type:Types.SET_LESSONS,
                        payload: data
                    })
                })
            }
        }
    }
}