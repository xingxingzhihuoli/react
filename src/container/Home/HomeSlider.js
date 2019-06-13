import React from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends React.Component{
    constructor(){
        super();
        this.state={index:0}
    };
    render(){
        return <div className='home-swipe'>
            <ReactSwipe key={this.props.sliders.length} swipeOptions={{
                auto:2000,
                continuous:true,
                callback:(index)=> {
                    this.setState({
                       index
                    })
                }
            }}>
                {this.props.sliders.map((item,index)=>{
                    return <div key={index}>
                        <img src={item} alt="" />
                    </div>
                })}
            </ReactSwipe>
            <div className="focus">
                {this.props.sliders.map((item,index)=>{
                    return <span key={index} className={this.state.index===index?'active':''} >
                        </span>
                })}
            </div>
        </div>
    }
}