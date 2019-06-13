import React from 'react';
import './index.less';
import HomeHeader from './HomeHeader';
import {connect} from 'react-redux';
import actions from '../../store/actions/index';
import HomeSliser from './HomeSlider';
import HomeList from './HomeList';
import {downUpdate} from '../../utils';
class Home extends React.Component{
    constructor(){
        super()
    };
    componentWillMount(){
        this.props.getSlider();
        if (!this.props.lesson.list.length>0){
            this.props.getLesson();
        }
    }
    componentDidMount(){
        downUpdate(this.content,this.props);
    }
    render(){
        return <div>
          <HomeHeader change={this.props.change}/>
          <div className='home-content' ref={(x)=>{this.content=x}}>
                <HomeSliser sliders={this.props.home} />
              <HomeList lessons={this.props.lesson.list} type={this.props.type}/>
          </div>
      </div>
    }
}
export default connect(state=>({...state.home}),actions)(Home)