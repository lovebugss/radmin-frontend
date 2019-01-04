/**
 * Created by renjp on 2019/1/4.
 */
import React from 'react';
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import logo from './logo.png'
import './index.css'
const {SubMenu} = Menu;
const {Content, Sider, Footer} = Layout;

function SiderMenu(props) {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={props.collapsed}
            width={240}
        >
            <div className="logo">
                <div className="text"> <img src={logo} className="img"/>{!props.collapsed ?"ITRJP.COM":""}</div>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="user"/>
                    <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera"/>
                    <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload"/>
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>

        </Sider>
    );
}
export default SiderMenu;