import {combineReducers} from 'redux';
import * as Types from '../action-type'
let initState = {
    type:'all',
    home:[],
    lesson:{
        list:[],
        offset:0,
        limit:5,
        hasMore:true
    }
};
function home(state = initState,action) {
    switch (action.type) {
        case Types.CHANGE_TYPE:
            return {...state,type:action.t};
        case Types.SET_SLIDERS:
            return {...state,home:action.payload};
        case Types.SET_LESSONS:
            return {...state,lesson: {...state.lesson,offset:state.lesson.offset+state.lesson.limit,list:[...state.lesson.list,...action.payload.list],hasMore: action.payload.hasMore}}
    }
    return state;
}
let reducers = combineReducers({
    home
});
export default reducers