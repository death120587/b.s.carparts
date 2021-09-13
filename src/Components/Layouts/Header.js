import React from "react";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom"

const { Header } = Layout;

class HeaderLayout extends React.Component 
{
    render() {
        return (
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key={0}>
                        <Link to='/'>Головна</Link>
                    </Menu.Item>
                    <Menu.Item key={1}> 
                        <Link to='/brands'>Марки авто</Link>
                    </Menu.Item>
                    <Menu.Item key={2}> 
                        <Link to='/models'>Моделі авто</Link>
                    </Menu.Item>
                    <Menu.Item key={3}> 
                        <Link to='/goods'>Товари</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default HeaderLayout;
