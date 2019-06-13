import React from 'react';
import './index.less';
import img from '../../images/profile.png'
import {Link} from 'react-router-dom';
class Login extends React.Component {
    constructor() {
        super()
    };
    goBack = () => {
        this.props.history.push('/profile')
    };
    render() {
        return <div className="login">
            <div className='login-header'>
                <i className='iconfont icon-fanhui' onClick={this.goBack}></i>
                <span>登录</span>
            </div>
            <div className='login-photo'>
                <img src={img} alt=""/>
            </div>
            <ul className='form'>
                <li><input type="text" placeholder={'请输入用户名'}/></li>
                <li><input type="password" placeholder={'请输入密码'}/></li>
                <li className='login-dl'><span>登录</span></li>
                <li className='login-zc'><Link to='/register'>前往注册</Link></li>
            </ul>
        </div>
    }
}
export default Login