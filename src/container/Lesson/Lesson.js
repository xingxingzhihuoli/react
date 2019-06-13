import React from 'react';
import './index.less';
import {connect} from 'react-redux';
import actions from '../../store/actions'
class Lesson extends React.Component{
    constructor(){
        super()
    };
    componentWillMount(){
        // this.props.getLesson();
    }
    render(){
        console.log(this.props.home.lesson);
        return <div className='lesson'>
            <ul className='lesson-list'>
                {this.props.home.lesson.list.map((item,index)=>{
                    return <li key={index}>
                        <img src={item.url} alt=""/>
                        <div>
                            <p>名称:{item.title}</p>
                            <p className='price'>价格:{item.price}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    }
}
export default connect(state=>({...state}),actions)(Lesson)