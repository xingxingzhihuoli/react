import React from 'react';
import './index.less';
import img from '../../images/profile.png';
import {Link} from 'react-router-dom';
class Profile extends React.Component{
    constructor(){
        super()
    };
    render(){
        return <div className='profile'>
            <img src={img} alt=""/>
            <Link to='/login'>登陆</Link>
        </div>
    }
}
export default Profile