import React from "react";
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom"

const { Header } = Layout;

const HeaderLayout = () =>
{     
    const location = useLocation()
    const activeMenuKey = location.pathname.replace('/', '');

        return (
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activeMenuKey]}>
                    <Menu.Item key={'home'}>
                        <Link to='/'>Головна</Link>
                    </Menu.Item>
                    <Menu.Item key={'brands'}> 
                        <Link to='/brands'>Марки авто</Link>
                    </Menu.Item>
                    <Menu.Item key={'models'}> 
                        <Link to='/models'>Моделі авто</Link>
                    </Menu.Item>
                    <Menu.Item key={'goods'}> 
                        <Link to='/goods'>Товари</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        );
}

export default HeaderLayout;
