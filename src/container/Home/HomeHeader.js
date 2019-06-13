import React from "react";
import img from "../../images/logo.png";
import "./index.less"
import {Transition} from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};
const transitionStyles = {
    entering: {opacity: 0},
    exited: {opacity: 1},
};

class HomeHeader extends React.Component {
    constructor() {
        super();
        this.state = {show: true}
    }
    changeShow = () => {
        this.setState({
            show: !this.state.show
        })
    };
    render() {
        return <div className="home-header">
            <img src={img} alt=""/>
            {this.state.show ? <i className="iconfont icon-liebiao" onClick={this.changeShow}></i> :
                <i className="iconfont icon-cha" onClick={this.changeShow}></i>}
            <Transition in={this.state.show} timeout={duration}
                        onEnter={(node)=>{node.style.display='none'}}
                        onExited={(node)=>{node.style.display='block'}}>
                {state => (
                    <ul className="header-course" style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} onClick={(e)=>{this.props.change(e.target.dataset.type)}}>
                        <li data-type="all">全部课程</li>
                        <li data-type="react">react课程</li>
                        <li data-type="vue">vue课程</li>
                    </ul>
                )}
            </Transition>
        </div>
    }
}
export default HomeHeader;
