import React from 'react';
export default class HomeList extends React.Component {
    constructor() {
        super()
    };
    getLessonByType = () => {
        let data = [];
        const type = this.props.type;
        if (type === 'all') {
            data = this.props.lessons;
        }
        if (type === 'react' || type === 'vue') {
            data = this.props.lessons.filter(item =>  {
                return item.category === type
            })
        }
        return data
    };
    render() {
        return <div className='home-list'>
            <p>全部课程</p>
            <ul>
                {this.getLessonByType().map((item, index) => {
                    return <li key={index}>
                        <img src={item.url} alt=""/>
                        <p className='price'>{item.price}</p>
                        <p>{item.title}</p>
                    </li>
                })}
            </ul>
        </div>
    }
}